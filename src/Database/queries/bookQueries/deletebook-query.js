const connection = require("../../config/db");

const query = `UPDATE book
                SET deleted = true 
                WHERE id = $1 AND deleted = false `;

module.exports = (id) => connection.query(query, [id]); 