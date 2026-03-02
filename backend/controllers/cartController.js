import userModel from '../models/userModels.js';

const addToCart = async (req, res) => {
    try {
        const { itemId } = req.body;
        const userId = req.userId;

        const user = await userModel.findById(userId);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const cart = user.cart || {};

        cart[itemId] = (cart[itemId] || 0) + 1;

        await userModel.findByIdAndUpdate(userId, { cart }, { new: true });

        res.json({ success: true, message: "Added to Cart", cart });
    } catch (error) {
        console.log("Add to Cart Error:", error);
        res.status(500).json({ success: false, message: "Error adding to cart" });
    }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
    try {
        const { itemId } = req.body;
        const userId = req.userId;

        const user = await userModel.findById(userId);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const cart = user.cart || {};

        if (!cart[itemId]) {
            return res.json({ success: false, message: "Item not in cart" });
        }

        cart[itemId] -= 1;
        if (cart[itemId] <= 0) delete cart[itemId];

        await userModel.findByIdAndUpdate(userId, { cart }, { new: true });

        res.json({ success: true, message: "Removed from Cart", cart });
    } catch (error) {
        console.log("Remove from Cart Error:", error);
        res.status(500).json({ success: false, message: "Error removing from cart" });
    }
};

// Get user's cart
const getCart = async (req, res) => {
    try {
        const userId = req.userId;

        const user = await userModel.findById(userId);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const cart = user.cart || {};

        res.json({ success: true, cart });
    } catch (error) {
        console.log("Get Cart Error:", error);
        res.status(500).json({ success: false, message: "Error fetching cart" });
    }
};

export { addToCart, removeFromCart, getCart };