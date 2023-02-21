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
    req.app.locals.layout = 'main';
    next();
});

router.get('/homecatalogue', (req,res) => {
    
    // const _id = ObjectID(req.session.passport.user);
    
    // Acct.getById(_id, function(results){
        
    //     if(results.ifAdmin){
    //         return res.redirect('/admin/orders');
    //     }
    //     else{
            
            // Orders.getByBuyer({}, function(orderList){
                // console.log(orderList)

    Prod.getAll(function (products){
        if (products) {
            res.render('catalogue', 
            {
                title: 'Fastfood Restaurant',
                catalogue: products,
                //orders: orderList
            })
        }
                })
            // })
    //     }
    // })
})

module.exports = router;
