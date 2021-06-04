const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    // console.log("hey desde middlware");
    let token = req.get("authorization");
    token = token && token.split(" ")[1];
    //console.log(token);
    jwt.verify(token, process.env.SEED, (error, payload) => {
        if (error) {
            res.status(401).json({
                ok: false,
                error
            })
        } else {
            next();
        }
    });
};

module.exports = verifyToken;