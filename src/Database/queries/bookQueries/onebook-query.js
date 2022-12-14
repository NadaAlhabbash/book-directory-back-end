const connection = require("../../config/connection");

const query = `SELECT id, name, author, edition, img
                FROM book 
                WHERE id = $1 AND deleted = false; `;

module.exports = (id) => connection.query(query, [id]);
