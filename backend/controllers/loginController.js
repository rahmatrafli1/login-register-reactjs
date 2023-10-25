const { User } = require("../models");
const decryptpass = require("../helpers/bcrypt.js");
const jwt = require("jsonwebtoken");

class itemController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const emailfound = await User.findOne({
        where: { email: email },
      });

      if (emailfound) {
        res.status(400).json({ message: "Email sudah terdaftar!" });
      } else {
        if (decryptpass.decryptpass(password, emailfound.password)) {
        } else {
          res.status(400).json({ message: "Password anda salah!" });
        }
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
module.exports = itemController;
