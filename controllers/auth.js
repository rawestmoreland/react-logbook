const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');

    // Check for a token
    if (!token) {
        return res.status(401).json({
            success: false,
            error: 'No token. Authorization denied'
        });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Add user from the payload
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({
            success: false,
            error: 'Token is not valid'
        });
    }
}

module.exports = auth;