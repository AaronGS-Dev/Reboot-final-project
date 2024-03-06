const Cart = require('../models/cart.model');
const Food = require('../models/foods.model');

const createList = async (req, res) => {
    try {
        const { userId, foodIds, ...listData } = req.body;

        const existingList = await Cart.findOne({ where: { userId } });
        if (existingList) {
            return res.status(400).json({
                message: 'User already has a list',
                result: existingList,
            });
        }

        const list = await Cart.create({ ...listData, userId });

        if (foodIds && foodIds.length) {
            const foodItems = await Food.findAll({
                where: {
                    id: foodIds,
                },
            });

            await list.addFood(foodItems);
        }

        const resultList = await Cart.findByPk(list.id, {
            include: [Food],
        });

        res.status(200).json({
            message: 'Cart created successfully',
            result: resultList,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error creating list',
            result: error,
        });
    }
};

const getListsByUser = async (req, res) => {
    try {
        const { userId } = req.params; 
        const lists = await Cart.findAll({
            where: { userId },
            include: [Food],
        });

        res.status(200).json({
            message: 'Lists retrieved successfully for user',
            result: lists,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving lists for user',
            result: error,
        });
    }
};

const addToList = async (req, res) => {
    try {
        const { userId, foodId } = req.params;
      
        if (!userId || !foodId) {
            return res.status(400).json({ message: 'userId y foodId son requeridos' });
        }

        let list = await Cart.findOne({ where: { userId } });
        console.log(list)
        
        if (!list) {
            return res.status(404).json({ message: 'Carrito no encontrado para el usuario' });
        }
        console.log(foodId)

        const food = await Food.findByPk(foodId);
        console.log(food);
        if (!food) {
            return res.status(404).json({ message: 'Comida no encontrada' });
        }

        await list.addFood(food);

        const updatedList = await Cart.findByPk(list.id, {
            include: [Food],
        });

        res.status(200).json({
            message: 'Comida agregada al carrito exitosamente',
            result: updatedList,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al agregar comida al carrito',
            result: error.message,
        });
    }
};

const getAllLists = async (req, res) => {
    try {
        const lists = await Cart.findAll();

        res.status(200).json({
            message: 'Lists returned successfully',
            result: lists,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error returning lists',
            result: error,
        });
    }
};

const getAllFood = async (req, res) => {
    try {
        const foods = await Food.findAll();

        res.status(200).json({
            message: 'Food items returned successfully',
            result: foods,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error returning food items',
            result: error,
        });
    }
};

const updateList = async (req, res) => {
    try {
        const { foodIds, ...listData } = req.body;

        const [updated] = await Cart.update(listData, {
            where: {
                id: req.params.id,
            },
        });

        const list = await Cart.findByPk(req.params.id);
        if (!list) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        if (foodIds && foodIds.length) {
            const foodItems = await Food.findAll({
                where: {
                    id: foodIds,
                },
            });

            await list.setFood(foodItems);
        }

        const resultList = await Cart.findByPk(req.params.id, {
            include: [Food],
        });

        res.status(200).json({
            message: 'Cart updated successfully',
            result: resultList,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error updating the list',
            result: error,
        });
    }
};

const deleteList = async (req, res) => {
    try {
        const listToDelete = await Cart.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!listToDelete) return res.status(404).send('Cart not found');

        res.status(200).json({
            message: 'Cart deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting the list',
            result: error,
        });
    }
};

module.exports = {
    createList,
    getListsByUser,
    getAllLists,
    getAllFood,
    updateList,
    deleteList,
    addToList,
};
