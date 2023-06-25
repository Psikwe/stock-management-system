const userLogin = require("../models/userLoginModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const login = await userLogin.login(email, password);
    const token = createToken(login._id);
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { login };
