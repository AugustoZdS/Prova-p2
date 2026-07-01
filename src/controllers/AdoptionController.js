const AdoptionService = require('../services/AdoptionService');

class AdoptionController {
  static async create(req, res) {
    try {
      const adoption =
        await AdoptionService.create(
          req.user.userId,
          req.body.pet_id
        );

      return res.status(201).json(
        adoption
      );
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  static async findAll(req, res) {
    try {
      const adoptions =
        await AdoptionService.findAll();

      return res.status(200).json(
        adoptions
      );
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }
}

module.exports = AdoptionController;