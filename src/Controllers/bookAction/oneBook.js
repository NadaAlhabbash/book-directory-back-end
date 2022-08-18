const { readJson } = require("../../Database/JSON");

const oneBook = (req, res, data) => {
  const books = JSON.parse(data);
  const book = books.find((c) => c.id === parseInt(req.params.id));
  if (!book) res.status(404).send("This book id is not found");
  res.status(200, { "Content-Type": "application/json" }).send(book);
};

const oneBookcb = (req, res) => {
  readJson(req, res, oneBook);
};

module.exports = {
  oneBookcb,
};
