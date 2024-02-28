/*
const User = require('../models/user.model')
const Foods = require('../models/foods.model')

const addToCart = async(req, res) => {
    const { userId, foodId } = req.body;
    try {
        const user = await User.findByPk(userId)
        const food = await Foods.findByPk(foodId)
        if(user && food) {
            await user.addFood(food);
            return res.status(201).json({ message: 'Elemento agregado al carrito correctamente' })
        } else {
            return res.status(404).json({ error: 'Usuario o alimento no encontrado' })
        }
    } catch (error) {
        console.error('Error al agregar al carrito:', error);
        return res.status(500).json({ error: 'Error interno del servidor' })
    }
};
*/