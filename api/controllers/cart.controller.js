const Cart = require('../models/cart.model');
const Food = require('../models/foods.model');

const addToCart = async (req, res) => {

    const productId = req.body.productId;

    const userId = res.locals.user.id;

    let cart = await Cart.findOne({ where: { UserId: userId } })

    if (!cart) {
        cart = await Cart.create({ UserId: userId })
    }

    const food = await Food.findByPk(productId)
    await cart.addFood(food, { through: { quantity: 1 } })

    res.status(200).send("Producto agregado al carrito correctamente")
};
