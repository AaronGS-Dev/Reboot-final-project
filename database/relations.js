const User = require('../api/models/user.model')
const Food = require('../api/models/foods.model')
const Cart = require('../api/models/cart.model')

const addRelations = () => {
    User.hasOne(Cart);
    Cart.belongsTo(User);
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
}

module.exports = addRelations