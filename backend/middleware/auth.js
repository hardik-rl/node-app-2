const jwt = require("jsonwebtoken");
const secretKey = "hardik@123";

const ensureAuthenticated = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res
      .status(403)
      .json({ message: "Unauthorize JWT token is require" });
  }
  const token = auth.split(" ")[1];
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Unauthorize JWT token wrong or expired" });
  }
};

module.exports = ensureAuthenticated;
