const User = require('../models/user.model')
const Foods = require('../models/foods.model')
const bcrypt = require('bcrypt')
 const createUser = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS))
        const hash = bcrypt.hashSync(req.body.password, salt)

        req.body.password = hash
        
       const user = await User.create(req.body)

       res.status(200).json(
        {
            message: 'User created',
            result: user
        })
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error creating user',
                result: error
            }
        )
    }
 }

const getAllUsers= async(req,res) => {
    const users = await User.findAll({
        attributes: ['id','name']
    })
    res.status(200).json(
        {
            message: users,
        }
    )
}

const getOneUser = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByPk(userId)
        if (!user) {
             res.status(404).json({ message: "User does not exist" })
        }
        res.status(200).json({ message: "User found", user: user })
    } catch (error) {
        res.status(400).json({ message: "Error", error: error.message })
    }
}
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updated = await User.update(req.body, {
            where: { id: userId }
        });
        if (updated) {
            const updatedUser = await User.findByPk(userId)
            res.status(200).json({ message: "User correctly actualized", user: updatedUser })
        }
        throw new Error('User does not exist');
    } catch (error) {
        res.status(400).json({ message: "Error", error: error.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deleted = await User.destroy({
            where: {id: userId}
        });
      
        if (deleted) {
            const deletedUser = await User.findByPk(userId)
            res.status(200).json({ message: "User correctly deleted", user: deletedUser })
        } else {
            throw new Error('User does not exist')
        }
    } catch (error) {
        res.status(400).json({ message: "Error", error: error.message })
    }
}
/*const addFoodtoUser = async (req, res) => {
    try {
        const userId = req.params.userId
        const foodId = req.params.foodId

        const user = await User.findByPk(userId)
        const food = await Food.findByPk(foodId)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        if (!food) {
            return res.status(404).json({ message: "Food not found" })
        }

        await user.addFood(food)

        res.status(200).json({ message: "Food added to user successfully" })
    } catch (error) {
        res.status(500).json({ message: "Error adding food to user", error: error.message })
    }
}*/

module.exports = {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    addFoodtoUser
};
