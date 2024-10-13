const jwt = require("jsonwebtoken");
const User = require("../models/user");

const protect = async (req, resizeBy, next) => {
    let token;

    if (
        req.headers.authoriation &&
        req.headers.authoriation.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authoriation.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            re.status(401).json({
                meassage: "Not authorized, token failed"
            })
        }
    }

    if(!token) {
        res.status(401).json({
            meassage: "Not authorized, no token"
        })
    }
}

module.exports = protect;