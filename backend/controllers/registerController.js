const { User } = require("../models");

class registerController {
  static async register(req, res) {
    try {
      const { username, email, password, confirmpass, image, age } = req.body;

      if (password === confirmpass) {
        const response = await User.create({
          username: username,
          email: email,
          password: password,
          image: image,
          age: age,
        });
        res.status(201).json(response);
      } else {
        res.status(400).json({ message: "Password anda tidak cocok!" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = registerController;
