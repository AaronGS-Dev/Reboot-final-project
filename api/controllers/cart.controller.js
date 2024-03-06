const Cart = require('../models/cart.model');
const Food = require('../models/foods.model');

const getCart = async(req, res) => {
    const cart = await Cart.findAll()
   return res.status(200).json(
        {
            message:'Here all products in your cart',
            result: cart
        }
    )
}


const addToCart = async (req, res) => {
    try {
        const userId = req.body.userId;
        const productId = req.body.foodId;
        console.log(productId)

        // let cart = await Cart.findOne({ where: { UserId: userId } });

        // if (!cart) {
        //     cart = await Cart.create({ UserId: userId });
        // }

        // const food = await Food.findByPk(productId);

        // if (!food) {
        //     return res.status(404).send("Product not found");
        // }

        const quantityToAdd = req.body.quantity;

        const cart = await Cart.create(req.body)
       // await cart.addFood(food, { through: { quantity: quantityToAdd } });

       return res.status(200).send("Added to cart");
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).send("Internal Server Error");
    } 
};

const deleteProduct = async(req,res) => {
    try {
        const cartId = req.params.id;
        const deleted = await Cart.destroy({
            where: {id: cartId}
        });
        if(deleted) {
            const deletedProduct = await Cart.findByPk(cartId)
            res.status(200).json({message:"Product correctly deleted", product: deletedProduct})
        }
        throw new Error('Product does not exist')
    } catch (error) {
        res.status(400).json({message: 'Error product', error: error.message})
    }
}

module.exports ={
    getCart,
    addToCart,
    deleteProduct
}