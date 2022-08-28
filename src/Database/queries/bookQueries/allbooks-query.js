const connection = require("../../config/connection");

const query = `SELECT id, name, author, edition, img
                FROM book 
                WHERE deleted = false ORDER BY id;`;

module.exports = () => connection.query(query);