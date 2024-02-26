const { DataTypes } = require('sequelize');
const {connection} = require('../../database/db.index');

const Cart = connection.define('cart', {
 
 total_price: {
   type: DataTypes.INTEGER,
 },


}, {
    timestamps: false
});

module.exports = Cart
