const router = require('express').Router()


const userRouter = require ('./user.router')
const authRouter = require('./auth.router')
const foodsRouter = require ('./foods.router')
router.use('/user',userRouter )
router.use('/auth',authRouter )
router.use('/foods',foodsRouter )

module.exports = router