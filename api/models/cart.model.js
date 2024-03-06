const { DataTypes } = require('sequelize');
const { connection } = require('../../database/index');


const Cart = connection.define('cart', {
    userId:{
        type: DataTypes.INTEGER,
        references: {
          model: 'user.model',
          key: 'id',
        },
    },
    foodId:{
        type: DataTypes.INTEGER,
        references: {
          model: 'foods.model',
          key: 'id',
        },
    },
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