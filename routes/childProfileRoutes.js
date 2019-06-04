const Auth = require("../services/AuthVerify");
const mongoose = require("mongoose");
const childProfile = mongoose.model("childProfile");
const { check, validationResult } = require("express-validator/check");

module.exports = app => {
  // @route    GET /api/current_profile
  // @desc     Return the logged user profile
  // @acess    Private
  app.get("/api/profile/current", Auth, async (req, res) => {
    try {
      const profile = await childProfile
        .findOne({ user: req.user.id })
        .populate("user", ["name", "picture"]);

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(400).send("User not found");
    }
  });

  // @route    GET /api/profile/all
  // @desc     Return all the profiles
  // @acess    Private
  app.get("/api/profile/all", async (req, res) => {
    try {
      const profiles = await childProfile
        .find()
        .populate("user", ["name", "middlename", "picture"]);
      return res.json(profiles);
    } catch (error) {
      console.log(error.message);
      res.status(400).send("Server Error");
    }
  });

  // @route    GET /api/profile/user/:user_id
  // @desc     Return the profile by id
  // @acess    Public
  app.get("/api/profile/user/:user_id", async (req, res) => {
    try {
      const { user_id } = req.params;

      const profile = await childProfile
        .findOne({ user: user_id })
        .populate("user", ["name", "middlename", "picture"]);

      // checking if acctually exist an profile with this id
      if (!profile) res.status(400).json({ msg: "Perifl não encontrado." });

      return res.json(profile);
    } catch (error) {
      console.log(error.message);

      if (error.kind == "ObjectId") {
        res.status(400).json({ msg: "Perfil não encontrado." });
      } else {
        res.status(400).send("Server Error");
      }
    }
  });

  // @route    POST /api/profile/create
  // @desc     Create or Update childrens profiles
  // @acess    Private
  app.post(
    "/api/profile/create",
    [
      Auth,
      check("name")
        .not()
        .isEmpty()
        .withMessage("Você deve inserir um nome.")
        .isLength({ max: 80 })
        .withMessage("Você deve inserir um nome com menos de 80 caracteres."),
      check("middlename")
        .not()
        .isEmpty()
        .withMessage("Você deve inserir um sobrenome.")
        .isLength({ max: 180 })
        .withMessage(
          "Você deve inserir um sobrenome com menos de 180 caracteres."
        ),
      check("genre")
        .not()
        .isEmpty()
        .withMessage("Você deve inserir um gênero.")
        .isLength({ max: 1 })
        .withMessage(
          "O gênero deve ser representado somente com um caractere."
        ),
      check("birth")
        .not()
        .isEmpty()
        .withMessage("Você deve inserir uma data de nascimento")
        .isLength({ max: 10, min: 10 })
        .withMessage("O formato da data deve seguir este padrão: XX/XX/XXXX")
    ],

    async (req, res) => {
      // validating and returning the errors checked previously
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
      }

      // reciving the data from the requisiton
      const { name, middlename, birth, genre, picture } = req.body;

      // defining the values and keys for the profile fields
      const profileFields = {};

      if (req.user.id) profileFields.user = req.user.id;
      if (name) profileFields.name = name;
      if (middlename) profileFields.middlename = middlename;
      if (birth) profileFields.birth = birth;
      if (genre) profileFields.genre = genre;
      if (picture) profileFields.picture = picture;

      try {
        let profile = await childProfile.findOne({ user: req.user.id });

        // if already exist an profile:
        if (profile) {
          // update
          profile = await childProfile.findOneAndUpdate(
            { user: req.user.id },
            { $set: profileFields },
            { new: true }
          );

          return res.json(profile);
        }

        // creating new profile
        profile = new childProfile(profileFields);
        await profile.save();
        res.json(profile);
      } catch (error) {
        console.log(error.message);
        res.status(500).json("Server Error");
      }
    }
  );
};
