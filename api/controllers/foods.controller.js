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

 module.exports = {
    createFoods
 }