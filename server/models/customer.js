const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


const customer = new Schema({
    name: String,
    birthdate: Date,
    pan: String,
    adahar: String,
    income: Number,
    mobile: Number,
    pincode: Number,
    availability: Number
}, {
    collection: 'customers',
})
module.exports = mongoose.model('customer', customer);