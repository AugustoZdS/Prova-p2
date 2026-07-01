const PetService = require('../services/PetService');

class PetController {
  static async create(req, res) {
    try {
      const pet = await PetService.create(
        req.body
      );

      return res.status(201).json(pet);
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  static async findAll(req, res) {
    try {
      const pets =
        await PetService.findAll();

      return res.status(200).json(pets);
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }

  static async findAvailable(req, res) {
    try {
      const pets =
        await PetService.findAvailable();

      return res.status(200).json(pets);
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }

  static async findById(req, res) {
    try {
      const pet =
        await PetService.findById(
          req.params.id
        );

      return res.status(200).json(pet);
    } catch (error) {
      return res.status(404).json({
        message: error.message
      });
    }
  }

  static async update(req, res) {
    try {
      const pet =
        await PetService.update(
          req.params.id,
          req.body
        );

      return res.status(200).json(pet);
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  static async delete(req, res) {
    try {
      const result =
        await PetService.delete(
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

module.exports = PetController;