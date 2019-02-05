const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Estudiante = sequelize.define(
  "Estudiante",
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    apellido: {
      type: Sequelize.STRING,
      allowNull: false
    },
    carnet: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    correo: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    regular: {
      type: Sequelize.TINYINT,
      allowNull: false,
      // 1 true, 0 false
      defaultValue: 1
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = Estudiante;
