var express = require("express");
// var { CustomerInfo } = require("../../models/customer_info");
// import { ObjectId } from "mongodb";
const Prod = require('../models/products')
const { default: mongoose } = require("mongoose");
var router = express.Router();

//TODO:: add in error and info


router.get("/", function (req, res) {
    res.render("home");
})


router.get("/homecatalogue", function (req, res) {
    Prod.getAll(function (products){
        if (products) {
            res.render('catalogue', 
            {
                title: 'Fastfood Restaurant',
                catalogue: products,
                // orders: orderList
            })
        }
                })
})


// app.use('/', require('./routes/catalogue'));
// app.use('/', require('./routes/profile'));
// app.use('/', require('./routes/checkout'));
// app.use('/', require('./routes/myorders'));


// router.use("/customer", require("./customer"));
// router.use("/plumber", require("./plumber"));
// router.use("/staff", require("./staff"));
// router.use("/admin", require("./admin"));


module.exports = router;
