import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const token = req.headers.token || req.headers.authorization; 
    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.id; 
        next();
    } catch (error) {
        console.log("JWT Error:", error);
        return res.status(401).json({ success: false, message: "Invalid Token" });
    }
};

export default authMiddleware;