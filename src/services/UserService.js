const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');

class UserService {
  static async create(userData) {
    const existingUser = await UserModel.findByEmail(
      userData.email
    );

    if (existingUser) {
      throw new Error('E-mail já cadastrado');
    }

    const hashedPassword = await bcrypt.hash(
      userData.password,
      10
    );

    const user = {
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      phone: userData.phone,
      role: 'adopter'
    };

    const id = await UserModel.create(user);

    return {
      id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role
    };
  }

  static async findAll() {
    return await UserModel.findAll();
  }

  static async findById(id) {
    const user = await UserModel.findById(id);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user;
  }

  static async update(id, userData) {
    const user = await UserModel.findById(id);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    await UserModel.update(id, userData);

    return await UserModel.findById(id);
  }

  static async delete(id) {
    const user = await UserModel.findById(id);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    await UserModel.delete(id);

    return {
      message: 'Usuário removido com sucesso'
    };
  }
}

module.exports = UserService;