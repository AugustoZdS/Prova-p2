const db = require('../config/database');

class AdoptionModel {
  static async create(userId, petId) {
    const [result] = await db.execute(
      `
      INSERT INTO adoptions
      (
        user_id,
        pet_id,
        adoption_date
      )
      VALUES
      (
        ?,
        ?,
        CURDATE()
      )
    `,
      [userId, petId]
    );

    return result.insertId;
  }

  static async findAll() {
    const [rows] = await db.execute(`
      SELECT
        a.id,
        a.adoption_date,

        u.id AS user_id,
        u.name AS adopter_name,

        p.id AS pet_id,
        p.name AS pet_name

      FROM adoptions a

      INNER JOIN users u
      ON a.user_id = u.id

      INNER JOIN pets p
      ON a.pet_id = p.id

      ORDER BY a.adoption_date DESC
    `);

    return rows;
  }

  static async findByUserAndPet(userId, petId) {
    const [rows] = await db.execute(
      `
      SELECT *
      FROM adoptions
      WHERE user_id = ?
      AND pet_id = ?
    `,
      [userId, petId]
    );

    return rows[0];
  }

  static async findById(id) {
    const [rows] = await db.execute(
      `
      SELECT *
      FROM adoptions
      WHERE id = ?
    `,
      [id]
    );

    return rows[0];
  }
}

module.exports = AdoptionModel;