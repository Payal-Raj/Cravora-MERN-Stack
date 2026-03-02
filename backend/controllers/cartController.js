import userModel from '../models/userModels.js';

// Add item to cart
const addToCart = async (req, res) => {
    try {
        const userData = await userModel.findOne({ _id: req.body.userId });

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};

        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });

        res.json({ success: true, message: "Added to Cart" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error adding to cart" });
    }
};

//remove items from user cart
const removeFromCart = async (req, res) => {

}

// /fetchUser cart data
const getCart = async (req, res) => {

}

export {addToCart, removeFromCart, getCart} ;