const connection = require("../../config/connection");

const query = `UPDATE book
                SET name = $1, author = $2, edition = $3, img = $4 
                WHERE id = $5 AND deleted = false `;

module.exports = (id, {
    name, author, edition, img,
}) => connection.query(query, [name, author, edition, img, id]);
