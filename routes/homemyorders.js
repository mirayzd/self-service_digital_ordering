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

router.get('/homemyorders', (req,res) => {

    Orders.getAll(function(orderList){
      
        if(orderList){
          console.log(orderList)
          var active = orderList.filter(obj => {
            return obj.status !== "Completed";
          })
  
          var past = orderList.filter(obj => {
            return obj.status === "Completed";
          })
  
          res.render('myorders', {title: 'Admin - Orders',
            fname: orderList.fname,
            profilepic: orderList.profilepic,
            activeorders: active,
            pastorders: past
          });
        }
    })
})

module.exports = router;
