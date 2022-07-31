const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({ message: "Token not found." });
  }
  try {
    const decoded = jwt.verify(token, "bbmp");
  } catch (err) {
    return res.status(401).json({ message: "Invalid token." });
  }
  next();
};

module.exports = authMiddleware;
