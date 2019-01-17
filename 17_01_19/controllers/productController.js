const sequelize = require('sequelize');
const db = require('../config/db');
const Product = require('../models/Product');

const controller = {};

controller.getProducts = async function (callback) {
    try {
        let response = await Product.findAll();
        let products = response.map(result => result.dataValues);
        console.log(products);
        callback(products, null);
    } catch (error) {
        callback(null, error);
    }
}

controller.deleteProduct = async function (callback) {
    try {
        // code goes here
        callback(null);
    } catch (error) {
        callback(error);
    }
}

module.exports = controller;