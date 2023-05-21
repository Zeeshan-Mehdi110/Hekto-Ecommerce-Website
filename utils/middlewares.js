const jwt = require("jsonwebtoken");
const User = require("../models/Users");

const verifyUser = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Error("invalid request 0");
    const token = req.headers.authorization.slice(7);
    if (!token) throw new Error("Invalid Request 1");

    const decryptToken = new Promise((resolve, reject) => {
      jwt.verify(
        token,
        process.env.JWT_ENCRYPTION_KEY,
        async (error, decodedToken) => {
          if (error) reject(error);
          resolve(decodedToken);
        }
      );
    });
    const decodedToken = await decryptToken;
    if (!decodedToken) throw new Error("invalid Request 2");
    const user = await User.findById(decodedToken.uID);
    req.user = user;
    if (!user) throw new Error("Invalid Request 3");
    if (user.status === 0) throw new Error("Your account is disabled");
    next();
  } catch (err) {
    res.status(401).json({ error: err.message }).end();
  }
};

module.exports = verifyUser;
