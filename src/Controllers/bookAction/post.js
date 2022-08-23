const { readJson, writeJson } = require("../../Database/JSON");
const { validateBookPOST } = require("../../util/index");

const postBook = (req, res, data) => {
  const books = JSON.parse(data);
  const { error } = validateBookPOST(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  } else {
    const book = {
      id: books.length + 1,
      name: req.body.name,
      author: req.body.author,
      deleted: "false",
    };
    books.push(book);
    writeJson(books, res);
    res.status(201, { "Content-Type": "application/json" }).send(book);
  }
};

const postBookcb = (req, res) => {
  readJson(req, res, postBook);
};

module.exports = {
  postBookcb,
};
