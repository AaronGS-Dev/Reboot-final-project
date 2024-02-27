const router = require('express').Router()


const userRouter = require ('./user.router')
const foodsRouter = require ('./foods.router')
router.use('/user',userRouter )
router.use('/foods',foodsRouter )

module.exports = router