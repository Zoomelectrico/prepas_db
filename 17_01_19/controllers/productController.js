const sequelize = require("sequelize");
const db = require("../config/db");
const Product = require("../models/Product");

const controller = {};

controller.getProducts = async function(callback) {
  try {
    let response = await Product.findAll({
      where: {
        Activo: 1
      }
    });
    let products = response.map(result => result.dataValues);
    console.log(products);
    callback(products, null);
  } catch (error) {
    callback(null, error);
  }
};

controller.deleteProduct = async function(id, callback) {
  try {
    let response = await Product.update(
      {
        Activo: false
      },
      {
        where: {
          id
        }
      }
    );
    callback(null);
  } catch (error) {
    callback(error);
  }
};

<<<<<<< HEAD
controller.createProduct = async function(data, callback) {
  try {
    console.log(data.nombre, data.precio);
    let response = await Product.create({
      Nombre: data.nombre,
      Precio: data.precio
    });

    response.save();
    callback(null);
  } catch (error) {
    callback(error);
  }
};

module.exports = controller;
=======
controller.createProduct = async function (data, callback) {
    try {
        console.log(data.nombre, data.precio);
        // code goes here
        callback(null);
    } catch (error) {
        callback(error);
    }
}

module.exports = controller;
>>>>>>> 0673d86a63dffafb6a75bb49be1319a67d976b49
