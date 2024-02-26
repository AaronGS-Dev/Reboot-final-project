const User = require('../api/models/user.model')
const Food = require('../api/models/foods.model')

const addRelations = () => {
    User.belongsToMany(Food, { through: 'Cart' });
    Food.belongsToMany(User, { through: 'Cart' });
}

module.exports = addRelations