const passport = require("passport");
const Auth = require("../services/AuthVerify");

module.exports = app => {
  // @route    GET auth/google
  // @desc     Open the Google API for user Login
  // @acess    Public
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["email", "profile"]
    })
  );

  // @route    GET /auth/google/callback
  // @desc     Callback of Google API
  // @acess    Public
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  // @route    GET /api/logout
  // @desc     Destroy an user login
  // @acess    Public
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // @route    GET /api/current_user
  // @desc     Return the logged urser's infos
  // @acess    Private
  app.get("/api/current_user", (req, res) => {
    res.json(req.user);
  });
};
