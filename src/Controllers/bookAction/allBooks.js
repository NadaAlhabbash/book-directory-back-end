const { readJson } = require('../../Database/JSON');

const allBooks = (req, res, data) => {
  const books = JSON.parse(data);
  res.status(200, { "Content-Type": "application/json" }).send(books);
};

const allBookscb = (req, res) => {
  readJson(req, res, allBooks);
};

module.exports = {
  allBookscb,
};
