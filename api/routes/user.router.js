const router = require('express').Router()

const {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
} = require('../controllers/user.controller')

const {
    checkAuth,
    checkAdmin,
} = require('../utils/middlewares')

router.post('/', checkAuth, checkAdmin, createUser)
router.get('/',  getAllUsers)
router.get('/:id', getOneUser) 
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)


module.exports = router