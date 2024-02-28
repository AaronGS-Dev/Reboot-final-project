const { DataTypes } = require('sequelize');
const { connection } = require('../../database/index');

const Cart = connection.define('Cart', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
},
{
    timestamps: false
});

module.exports = Cart;