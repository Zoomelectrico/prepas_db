const sequelize = require('sequelize');
const db = require('../config/db');

// Modelo de Producto
const Product = db.define('Product', {
    Nombre: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    Precio: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    Activo: {
        type: sequelize.TINYINT,
        allowNull: false,
        defaultValue: 1,

        validate: {
            notEmpty: true
        }
    }

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Product;