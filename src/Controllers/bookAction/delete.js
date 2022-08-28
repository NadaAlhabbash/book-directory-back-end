const { CostumError } = require("../errorHandler/errorHandler");
const { deletebookq, onebookq } = require("../../Database/queries/index");

// const { readJson, writeJson } = require("../../Database/JSON");

// const deletBook = (req, res, data) => {
//   const books = JSON.parse(data);
//   const book = books.find((c) => c.id === parseInt(req.params.id));
//   if (!book) {
//     res.status(404).send("This book id is not found");
//   } else {
//     book.deleted='true'
//     writeJson(books, res);

//     res
//       .status(200, { "Content-Type": "application/json" })
//       .send(`Book with id ${book.id} has been deleted`);
//   }
// };

// const deletBookcb = (req, res) => {
//   readJson(req, res, deletBook);
// };

// module.exports = {
//   deletBookcb,
// };

module.exports = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const book = (await onebookq(id)).rows[0];
    if (!book) {
      throw CostumError(`user with id: ${id} can not been found`, 404);
    }
    await deletebookq(id, book);
    return res.status(200).json({
      massage: `user with id:${id} has been deleted successfully`,
    });
  } catch (err) {
    return next(err);
  }
};
