const User = require('../api/models/user.model')
const Food = require('../api/models/foods.model')
const Cart = require('../api/models/cart.model')

const addRelations = () => {
    User.belongsToMany(Food, { through: 'cart' });
    Food.belongsToMany(User, { through: 'cart' });
}

module.exports = addRelations