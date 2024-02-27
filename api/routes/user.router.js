const router = require('express').Router()

const {
    createUser, getAllUsers
} = require('../controllers/user.controller')

router.post('/', createUser)
router.get('/', getAllUsers)

module.exports = router