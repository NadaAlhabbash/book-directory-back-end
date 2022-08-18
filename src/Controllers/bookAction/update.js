const { readJson, writeJson } = require("../../Database/JSON");
const {validateBookPUT} = require('../../util/index')


const updateBook = (req, res, data) => {
  const books = JSON.parse(data);
  const book = books.find((c) => c.id === parseInt(req.params.id));
  if (!book) res.status(404).send("This book id is not found");
  const { error } = validateBookPUT(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  } else {
    let updated = {
      id: book.id,
      name: req.body.name || book.name,
      author: req.body.author || book.author,
    };
    // if (!updated.name) updated.name = book.name;
    // if (!updated.author) updated.author = book.author;

    let index = books.indexOf(book);
    books.splice(index, 1, updated);

    writeJson(books, res);
    res
      .status(201, { "Content-Type": "application/json" })
      .send(`Book with id ${book.id} has been updated`);
  }
};

const updateBookcb = (req, res) => {
  readJson(req, res, updateBook);
};

module.exports = {
  updateBookcb,
};
