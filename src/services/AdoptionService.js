const AdoptionModel = require('../models/AdoptionModel');

const PetModel = require('../models/PetModel');

class AdoptionService {
  static async create(userId, petId) {
    const pet = await PetModel.findById(petId);

    if (!pet) {
      throw new Error('Pet não encontrado');
    }

    if (pet.status === 'adopted') {
      throw new Error(
        'Este pet já foi adotado'
      );
    }

    const existingAdoption =
      await AdoptionModel.findByUserAndPet(
        userId,
        petId
      );

    if (existingAdoption) {
      throw new Error(
        'Usuário já adotou este pet'
      );
    }

    const adoptionId =
      await AdoptionModel.create(
        userId,
        petId
      );

    await PetModel.updateStatus(
      petId,
      'adopted'
    );

    return await AdoptionModel.findById(
      adoptionId
    );
  }

  static async findAll() {
    return await AdoptionModel.findAll();
  }
}

module.exports = AdoptionService;