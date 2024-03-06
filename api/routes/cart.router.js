
const listRouter = require('express').Router();

const {
    createList,
    getAllLists,
    getAllFood,
    getListsByUser,
    updateList,
    deleteList,
    addToList,
} = require('../controllers/cart.controller');
const { checkAuth, checkAdmin } = require('../utils/middlewares');

listRouter
    .get('/food', getAllFood)
    .get('/', getAllLists)
    .get('/user/:userId', getListsByUser) 
    .post('/', createList)
    .put('/:id', updateList)
    .put('/:userId/:foodId', addToList)
    .delete('/:id', deleteList);

module.exports = listRouter;