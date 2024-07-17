const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const secretKey = "hardik@123"

// login
const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(403).json({ message: "Email Mismatch" });
  }
  const isPwdEql = await bcrypt.compare(password, user.password);
  if (!isPwdEql) {
    return res.status(403).json({ message: "Password mismatch" });
  }
  const generateToken = (user) => {
    const payload = {
      userId: user.id,
      email: user.email,
    };
    return jwt.sign(payload, secretKey, { expiresIn: "1h" }); // Token expires in 1 hour
  };
  const token = generateToken(user);
  // const jwtToken = jwt.sign(
  //   { email: user.email, _id: user._id },
  //   secretKey,
  //   {expiresIn: "1h"}
  // );
  res.json({token, email});
}

// Signup
const handleSignUp = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      gender: req.body.gender,
      password: hashedPassword,
    });
    const userCheck = await User.findOne({ email: req.body.email });
    if (userCheck) {
      return res.status(409).json("User Already Exist");
    }
    await user.save();
    res.status(201).send("User Created");
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  handleLogin,
  handleSignUp,
};
