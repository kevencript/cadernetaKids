const passport       = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys           = require('../configs/keys');
const mongoose       = require('mongoose');
const User           = mongoose.model('users');

passport.use(
    new GoogleStrategy({
        clientID: keys.GoogleClientID,
        clientSecret: keys.GoogleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (acessToken, refreshToken, profile, done) => {
            new User({ 
                googleId: profile.id,
                name: profile.displayName
             }).save()
             
             .then(userCreated => {
                 console.log(userCreated);
             });
    }
));