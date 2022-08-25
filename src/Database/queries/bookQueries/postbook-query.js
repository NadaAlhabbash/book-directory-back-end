const connection = require("../../config/db");

const query = `INSERT INTO book (name, author, edition, img) 
                VALUES ($1,$2,$3,$4)`;

module.exports = ({ name, author, edition, img }) =>
  connection.query(query, [name, author, edition, img]);
