const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../configs/keys");
const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GoogleClientID,
      clientSecret: keys.GoogleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (acessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        console.log("User is: " + existingUser);
        done(null, existingUser);
      } else {
        const userCreated = await new User({
          googleId: profile.id,
          name: profile._json.given_name,
          middlename: profile._json.family_name,
          email: profile._json.email
        }).save();

        console.log("User created: " + userCreated);
        done(null, userCreated);
      }
    }
  )
);
