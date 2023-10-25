const { User } = require("../models");

class userController {
  static async getUser(req, res) {
    try {
      const user = await User.findAll({
        attributes: ["id", "username", "email", "password", "image", "age"],
        order: [["id", "ASC"]],
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateUser(req, res) {
    try {
      const { username, email, password, image, age } = req.body;
      const response = await User.update(
        {
          username: username,
          email: email,
          password: password,
          image: image,
          age: age,
        },
        { where: { id: req.params.id }, returning: true }
      );
      response
        ? res.status(200).json(response)
        : res
            .status(404)
            .json({ message: `User id ${req.params.id} tidak ada` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async destroyUser(req, res) {
    try {
      const response = await User.destroy({
        where: { id: req.params.id },
      });

      response === 1
        ? res.status(200).json({ message: "User berhasil dihapus!" })
        : res
            .status(404)
            .json({ message: `User id ${req.params.id} tidak ada!` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getDetailUser(req, res) {
    try {
      const user = await User.findOne({
        attributes: ["id", "username", "email", "password", "image", "age"],
        where: { id: req.params.id },
      });

      user
        ? res.status(200).json(user)
        : res
            .status(404)
            .json({ message: `User id ${req.params.id} tidak ada` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
module.exports = userController;
