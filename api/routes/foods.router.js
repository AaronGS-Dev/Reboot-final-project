const router = require('express').Router()

const {
    createFoods, 
    getAllFoods,
    getOneFood,
    updateFood,
    deleteFood
    
} = require('../controllers/foods.controller')

router.post('/', createFoods)
router.get('/', getAllFoods)
router.get('/:id', getOneFood)
router.patch('/:id', updateFood)
router.delete('/:id', deleteFood)

module.exports = router