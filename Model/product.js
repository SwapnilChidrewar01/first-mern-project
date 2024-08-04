const mongoose = require('mongoose');
const express = require('express')
var schema = mongoose.Schema;
const productschema = new schema({
    Title: String,
    description: String,
    price: Number,
    rating: Number,
    category: String,
    ranking: Number
});
exports.product = mongoose.model('product', productschema);