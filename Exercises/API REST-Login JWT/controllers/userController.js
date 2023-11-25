const User = require("../models/User");

const userController = {
  register: async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    try {
      const savedUser = await user.save();
    } catch (error) {
      res.status(400).send(error);
    }
  },
  login: (req, res) => {
    console.log("login");
    res.send("login");
  },
};

module.exports = userController;
