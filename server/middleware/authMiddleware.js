const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) => {
    const token = req.header('Authorization');
    console.log('Token received:', token);

    if (!token) {
        return res.status(403).json({ message: 'Access denied, no token provided' });
    }

    try {
        const verified = jwt.verify(token.split(' ')[1],process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(401).json({ message: err });
    }
}
module.exports = verifyToken;