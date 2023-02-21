const express = require('express');
const router = express.Router();
const passport = require('passport');
const {forwardAuthenticated } = require('../config/auth');

//Use Main Layout for Non-admins
router.all('/*', function (req, res, next) {
    req.app.locals.layout = 'admin';
    next();
});

// Use Admin Layout for Admins
router.all('/admin*', function (req, res, next) {
    req.app.locals.layout = 'admin';
    next(); // pass control to the next handler
});

router.get('/login', forwardAuthenticated, (req,res) => {
    res.render('login', {title: 'Login', layout: 'landing'})
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
    successRedirect: '/admin/orders',
    failureRedirect: '/#login',
    failureFlash: true
    })(req, res, next);
});

router.get('/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
    req.flash('msg', 'You are logged out');
    res.redirect('/');
    });
});

module.exports = router;