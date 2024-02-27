const router = require('express').Router()

const {
    createFoods
} = require('../controllers/foods.controller')

router.post('/', createFoods)

module.exports = router