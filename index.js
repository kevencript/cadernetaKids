const express = require("express");
const mongoose = require("mongoose");
const keys = require("./configs/keys");
const requireDir = require("require-dir");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// Routes imports
require("./routes/authRoutes")(app); // Auth Routes
require("./routes/childProfileRoutes")(app); // Profile Routes

const PORT = process.env.PORT || 5000;

app.listen(PORT);
