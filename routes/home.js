const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const mongoose = require("mongoose");
const moment = require('moment');

const ObjectID = require('mongodb').ObjectID;
const Acct = require('../models/accounts')
const Orders = require('../models/orders')
const Prod = require('../models/products')

router.all('/*', function (req, res, next) {
    req.app.locals.layout = 'landing';
    next();
});

router.get('/', (req,res) => {
    res.render("home");
})

module.exports = router;
