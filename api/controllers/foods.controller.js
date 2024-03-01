const Food = require('../models/foods.model')
const Foods = require('../models/foods.model')

 const createFoods = async (req, res) => {
    try {
        
       const foods = await Foods.create(req.body)

       res.status(200).json(
        {
            message: 'Food created',
            result: foods
        })
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error creating food',
                result: error
            }
        )
    }
 }

const getAllFoods = async(req, res) => {
    const foods = await Foods.findAll({
        attributes: ['id', 'title', 'description']
    })
    res.status(200).json(
        {
            message: foods
        }
    )
}

const getOneFood = async(req, res) => {
    try {
        const foodId = req.params.id
        const food = await Foods.findByPk(foodId)
        if(!food){
         res.status(404).json({message: "Food does not exist"})
        }
        res.status(200).json({message: "Food found", food:food})
    } catch (error) {
        res.status(400).json({message: "Error", error: error.message})
    }
}

const updateFood = async(req, res) => {
    try {
        const foodId = req.params.id;
        const updated = await Food.update(req.body, {
            where: {id: foodId}
        });
        if(updated) {
            const updatedFood = await Food.findByPk(foodId)
            res.status(200).json({message: "Food correctly actualized", food:updatedFood})
        }
        throw new Error('Food does not exist');
    } catch (error) {
        res.status(400).json({ message: 'Error', error: error.message})
    }
}

const deleteFood = async(req, res) => {
    try {
        const foodId = req.params.id;
        const deleted = await Food.destroy({
            where: {id: foodId}
        });
        if(deleted) {
            const deletedFood = await Food.findByPk(foodId)
            res.status(200).json({message: "Food correctly deleted", food:deletedFood})
        }
        throw new Error('Food does not exist');
    } catch (error) {
        res.status(400).json({ message: 'Error', error: error.message})
    }
}
 module.exports = {
    createFoods,
     getAllFoods,
     getOneFood,
     updateFood,
     deleteFood
 }