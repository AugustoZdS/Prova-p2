const UserService = require('../services/UserService');

class UserController {
  static async create(req, res) {
    try {
      const user = await UserService.create(req.body);

      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  static async findAll(req, res) {
    try {
      const users = await UserService.findAll();

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }

  static async findById(req, res) {
    try {
      const user = await UserService.findById(
        req.params.id
      );

      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({
        message: error.message
      });
    }
  }

  static async update(req, res) {
    try {
      const user = await UserService.update(
        req.params.id,
        req.body
      );

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  static async delete(req, res) {
    try {
      const result = await UserService.delete(
        req.params.id
      );

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }
}

module.exports = UserController;