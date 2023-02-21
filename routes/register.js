const express = require('express');
const router = express.Router();
const { forwardAuthenticated } = require('../config/auth');

const Acct = require('../models/accounts')

router.get('/register', forwardAuthenticated, (req,res) => {
    res.render('register', {title: 'Register', layout: 'landing'})
})

router.post('/register', (req,res) => {

    const { fname, lname, email, number, pw1, add1, add2, city } = req.body;

    if( Acct.ifExists(email) )
    {
        res.render( 'register', {
            error: "User already exists with the email"
        })
    }
    else{
        Acct.create(fname, lname, email, number, pw1,add1, add2, city);
        req.flash("msg", "Registration Successful")
        res.redirect('/');
    }
    
});

module.exports = router;