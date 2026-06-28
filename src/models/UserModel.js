const db = require('../config/database');

class UserModel {
  static async create(user) {
    const { name, email, password, phone, role } = user;

    const [result] = await db.execute(
      `
      INSERT INTO users
      (name, email, password, phone, role)
      VALUES (?, ?, ?, ?, ?)
      `,
      [name, email, password, phone, role]
    );

    return result.insertId;
  }

  static async findAll() {
    const [rows] = await db.execute(`
      SELECT
      id,
      name,
      email,
      phone,
      role
      FROM users
    `);

    return rows;
  }

  static async findById(id) {
    const [rows] = await db.execute(
      `
      SELECT
      id,
      name,
      email,
      phone,
      role
      FROM users
      WHERE id = ?
    `,
      [id]
    );

    return rows[0];
  }

  static async findByEmail(email) {
    const [rows] = await db.execute(
      `
      SELECT *
      FROM users
      WHERE email = ?
    `,
      [email]
    );

    return rows[0];
  }

  static async update(id, user) {
    const { name, email, phone } = user;

    const [result] = await db.execute(
      `
      UPDATE users
      SET
      name = ?,
      email = ?,
      phone = ?
      WHERE id = ?
    `,
      [name, email, phone, id]
    );

    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await db.execute(
      `
      DELETE FROM users
      WHERE id = ?
    `,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = UserModel;