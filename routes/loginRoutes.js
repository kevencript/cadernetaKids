const router = require('express');
const app = router();

const authCheck = (req, res, next) => {

    if(!req.user){
        res.redirect('/auth/google');
    } else {
        next();
    }
}


app.get('/', authCheck, (req, res) => {
    res.send('You are logged in, '+req.user.name);
});

module.exports = app;