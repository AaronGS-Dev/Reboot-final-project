const { DataTypes } = require('sequelize');
const {connection} = require('../../database/index');

const Food = connection.define('foods', {
 
 title: {
   type: DataTypes.STRING,
   allowNull: false
 },

 description: {
    type: DataTypes.STRING,
    allowNull: false
  },

  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
 
  value: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  fat: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  saturated_fat: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  hydrate: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  sugar: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  protein: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  salt: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

}, {
    timestamps: false
});

module.exports = Food