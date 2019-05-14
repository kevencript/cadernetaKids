const express = require("express");
const mongoose = require("mongoose");
const keys = require("./configs/keys");
const requireDir = require("require-dir");
const passport = require("passport");
const cookieSession = require("cookie-session");
const loginRoutes = require("./routes/loginRoutes");

requireDir("./models");
require("./services/passport");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
app.use("/profile", loginRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
