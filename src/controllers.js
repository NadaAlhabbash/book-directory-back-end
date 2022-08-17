const fs = require("fs");
const path = require("path");
const joi = require("joi");

const filePath = path.join(__dirname, "..", "books.json");

const allBooks = (req, res, data) => {
  const books = JSON.parse(data);
  res.status(200, { "Content-Type": "application/json" }).send(books);
};

const oneBook = (req, res, data) => {
  const books = JSON.parse(data);
  const book = books.find((c) => c.id === parseInt(req.params.id));
  if (!book) res.status(404).send("This book id is not found");
  res.status(200, { "Content-Type": "application/json" }).send(book);
};

const postBook = (req, res, data) => {
  const books = JSON.parse(data);
  const { error } = validateBook(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  const book = {
    id: books.length + 1,
    name: req.body.name,
    author: req.body.author,
  };
  books.push(book);
  writeJson(books, res);
  res.send(book);
};

const updateBook = (req, res, data) => {
  const books = JSON.parse(data);
  const book = books.find((c) => c.id === parseInt(req.params.id));
  if (!book) res.status(404).send("This book id is not found");
  const { error } = validateBook(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }else{

  let updated = {
    id: book.id,
    name: req.body.name,
    author: req.body.author,
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

const deletBook = (req, res, data) => {
  const books = JSON.parse(data);
  const book = books.find((c) => c.id === parseInt(req.params.id));
  if (!book){
     res.status(404).send("This book id is not found");
}else{

  const index = books.indexOf(book);
  books.splice(index, 1);
  writeJson(books, res);

  res.status(200, { "Content-Type": "application/json" }).send(books);
}
};

const writeJson = (data, res) => {
  let jsonContent = JSON.stringify(data);
  fs.writeFile(filePath, jsonContent, "utf8", (err) => {
    if (err)
      res
        .status(500, { "Content-Type": "text/html" })
        .send("<h1>Sorry, we've had a problem on our end</h1>");
    else {
      console.log("File written successfully\n");
    }
  });
};

const readJson = (req, res, cb) => {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res
        .status(500, { "Content-Type": "text/html" })
        .send("<h1>Sorry, we've had a problem on our end</h1>");
    } else {
      cb(req, res, data);
    }
  });
};

function validateBook(book) {
  const schema = {
    name: joi.string().min(3).required(),
    author: joi.string().min(3).required(),
  };

  return joi.validate(book, schema);
}

const allBookscb = (req, res) => {
  readJson(req, res, allBooks);
};

const oneBookcb = (req, res) => {
  readJson(req, res, oneBook);
};

const postBookcb = (req, res) => {
  readJson(req, res, postBook);
};

const updateBookcb = (req, res) => {
  readJson(req, res, updateBook);
};

const deletBookcb = (req, res) => {
  readJson(req, res, deletBook);
};

module.exports = {
  allBookscb,
  oneBookcb,
  postBookcb,
  updateBookcb,
  deletBookcb,
};
