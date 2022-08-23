const { readJson } = require("../../Database/JSON");
const queries = require ('../../Database/queries');
const pool = require('../../../db');

const oneBook = (req, res, data) => {
//   const books = JSON.parse(data);
//   const book = books.find((c) => c.id === parseInt(req.params.id));
//   if (!book || book.deleted !== 'false'){
//     res.status(404).send("This book id is not found");
//   } else{
//     res.status(200, { "Content-Type": "application/json" }).send(book);
//   }
const id = parseInt(req.params.id);
  pool.query(queries.oneBook, [id], (err, data) => {
    if (err) throw err;
    console.log(data.rows);
    res.status(200).json(data.rows);
  });
};


const oneBookcb = (req, res) => {
  readJson(req, res, oneBook);
};

module.exports = {
  oneBookcb,
};
