const db = require('../config/database');

class PetModel {
  static async create(pet) {
    const {
      name,
      age,
      species,
      size,
      description
    } = pet;

    const [result] = await db.execute(
      `
      INSERT INTO pets
      (
        name,
        age,
        species,
        size,
        status,
        description
      )
      VALUES (?, ?, ?, ?, 'available', ?)
    `,
      [
        name,
        age,
        species,
        size,
        description
      ]
    );

    return result.insertId;
  }

  static async findAll() {
    const [rows] = await db.execute(`
      SELECT *
      FROM pets
    `);

    return rows;
  }

  static async findAvailable() {
    const [rows] = await db.execute(`
      SELECT *
      FROM pets
      WHERE status = 'available'
    `);

    return rows;
  }

  static async findById(id) {
    const [rows] = await db.execute(
      `
      SELECT *
      FROM pets
      WHERE id = ?
    `,
      [id]
    );

    return rows[0];
  }

  static async update(id, pet) {
    const {
      name,
      age,
      species,
      size,
      description
    } = pet;

    const [result] = await db.execute(
      `
      UPDATE pets
      SET
      name = ?,
      age = ?,
      species = ?,
      size = ?,
      description = ?
      WHERE id = ?
    `,
      [
        name,
        age,
        species,
        size,
        description,
        id
      ]
    );

    return result.affectedRows;
  }

  static async updateStatus(id, status) {
    const [result] = await db.execute(
      `
      UPDATE pets
      SET status = ?
      WHERE id = ?
    `,
      [status, id]
    );

    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await db.execute(
      `
      DELETE FROM pets
      WHERE id = ?
    `,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = PetModel;