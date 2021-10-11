var express = require('express');
var router = express.Router();
var Customer = require('../models/customer');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

router.route('/').get((req, res) => {
  Customer.find((err, value) => {
    if (err) {
      console.log(err);
    } else {
      res.json(value);
    }
  });
})

router.route('/addCustomer').post( function (req, res) {
  var customer = new Customer()
  customer.name = req.body.name;
  customer.birthdate = req.body.birthdate;
  customer.pan = req.body.pan;
  customer.adahar = req.body.adahar;
  customer.income = req.body.income;
  customer.mobile = req.body.mobile;
  customer.pincode = req.body.pincode;
  customer.availability = getRandomInt(2);
  customer.save();
  res.send('succesfully added')
})
module.exports = router;
