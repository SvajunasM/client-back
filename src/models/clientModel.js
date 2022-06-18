const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

async function getClientFromDb(user_id) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `SELECT * FROM clients WHERE user_id = ?`;
    const [result] = await connection.execute(sql, [user_id]);
    await connection.close();
    return result;
  } catch (error) {
    return false;
  }
}

async function putClientToDb(data) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `
    INSERT INTO clients (name, surname, email, address, phone, user_id) 
    VALUES (?, ?, ?, ?, ?, ?)`;
    const { name, surname, email, address, phone, user_id } = data;
    const [result] = await connection.execute(sql, [
      name,
      surname,
      email,
      address,
      phone,
      user_id,
    ]);
    await connection.close();
    return result;
  } catch (error) {
    return false;
  }
}

module.exports = {
  getClientFromDb,
  putClientToDb,
};

