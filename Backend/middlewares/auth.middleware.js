const userModel = require('../models/user.models');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blacklistToken.model'); // Import the blacklist token model
 

module.exports.authUser = async (req, res, next) => {
    try {
        const token =
            req.cookies?.token ||
            (req.headers.authorization ? req.headers.authorization.split(' ')[1] : null);

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const isBlackListed = await blackListTokenModel.findOne({ token: token });

        if (isBlackListed) {
            return res.status(401).json({ message: 'Unauthorized: Token blacklisted' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized: User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized', error: error.message });
    }
};