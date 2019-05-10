const express = require('express');
const mongoose = require('mongoose');
const keys = require('./configs/keys');
const requireDir = require('require-dir');

requireDir('./models');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);