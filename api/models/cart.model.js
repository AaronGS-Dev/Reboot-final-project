const { DataTypes } = require('sequelize');
const { connection } = require('../../database/index');
const User = require('./user.model.js');
const Food = require('./foods.model.js')

const Cart = connection.define(
    'cart', 
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        createdAt: true,
    }
);

Cart.belongsTo(User, { foreignKey: 'userId' });

Cart.belongsToMany(Food, {
    through: 'listcard',
    foreignKey: 'listId',
    otherKey: 'foodsId',
});
Food.belongsToMany(Cart, {
    through: 'listcard',
    foreignKey: 'foodsId',
    otherKey: 'listId',
});

module.exports = Cart;