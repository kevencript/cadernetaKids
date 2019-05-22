const passport = require("passport");

const Auth = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/google");
  } else {
    next();
  }
};

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["email", "profile"]
    })
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );
};
