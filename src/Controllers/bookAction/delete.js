const { readJson, writeJson } = require("../../Database/JSON");

const deletBook = (req, res, data) => {
  const books = JSON.parse(data);
  const book = books.find((c) => c.id === parseInt(req.params.id));
  if (!book) {
    res.status(404).send("This book id is not found");
  } else {
    book.deleted='true'
    writeJson(books, res);

    res
      .status(200, { "Content-Type": "application/json" })
      .send(`Book with id ${book.id} has been deleted`);
  }
};

const deletBookcb = (req, res) => {
  readJson(req, res, deletBook);
};

module.exports = {
  deletBookcb,
};
