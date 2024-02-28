const { DataTypes } = require('sequelize');
const {connection} = require('../../database/index');

const Cart = connection.define('carts', {

},
{
    timestamps: false
});
module.exports = Cart