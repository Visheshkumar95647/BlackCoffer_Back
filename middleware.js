const jwt = require('jsonwebtoken');
const VerifyToken = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const data = jwt.verify(token,"Vishesh@123");
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid token" });
    }
};
module.exports = VerifyToken;