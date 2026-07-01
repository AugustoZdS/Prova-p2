const PetModel = require('../models/PetModel');

class PetService {
  static async create(petData) {
    const id = await PetModel.create(petData);

    return await PetModel.findById(id);
  }

  static async findAll() {
    return await PetModel.findAll();
  }

  static async findAvailable() {
    return await PetModel.findAvailable();
  }

  static async findById(id) {
    const pet = await PetModel.findById(id);

    if (!pet) {
      throw new Error('Pet não encontrado');
    }

    return pet;
  }

  static async update(id, petData) {
    const pet = await PetModel.findById(id);

    if (!pet) {
      throw new Error('Pet não encontrado');
    }

    await PetModel.update(id, petData);

    return await PetModel.findById(id);
  }

  static async delete(id) {
    const pet = await PetModel.findById(id);

    if (!pet) {
      throw new Error('Pet não encontrado');
    }

    if (pet.status === 'adopted') {
      throw new Error(
        'Pets adotados não podem ser removidos'
      );
    }

    await PetModel.delete(id);

    return {
      message: 'Pet removido com sucesso'
    };
  }
}

module.exports = PetService;