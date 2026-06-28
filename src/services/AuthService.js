const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserModel = require('../models/UserModel');

class AuthService {
  static async login(email, password) {
    const user =
      await UserModel.findByEmail(email);

    if (!user) {
      throw new Error(
        'Credenciais inválidas'
      );
    }

    const passwordMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!passwordMatch) {
      throw new Error(
        'Credenciais inválidas'
      );
    }

    const token = jwt.sign(
      {
        userId: user.id,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn:
          process.env.JWT_EXPIRES_IN
      }
    );

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    };
  }
}

module.exports = AuthService;