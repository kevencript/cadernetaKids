const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../configs/keys');

passport.use(
    new GoogleStrategy({
        clientID: keys.GoogleClientID,
        clientSecret: keys.GoogleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (acessToken, refreshToken, profile) => {
        console.log(profile);
    }
));