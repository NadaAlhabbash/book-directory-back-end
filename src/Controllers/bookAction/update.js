const {validateBookPUT}  = require("../../util/index");
const {CostumError} = require('../../Routes/errorHandler');
const  {updatebookq, onebookq}  = require('../../Database/queries/index');

// const { readJson, writeJson } = require("../../Database/JSON");

// const updateBook = (req, res, data) => {
//   const books = JSON.parse(data);
//   const book = books.find((c) => c.id === parseInt(req.params.id));
//   if (!book || book.deleted !== 'false'){
//     res.status(404).send("This book id is not found");
//     return;
//   }
//   const { error } = validateBookPUT(req.body);
//   if (error) {
//     res.status(400).send(error.details[0].message);
//     return;
//   } else {
//     let updated = {
//       id: book.id,
//       name: req.body.name || book.name,
//       author: req.body.author || book.author,
//       deleted: book.deleted,
//     };

//     let index = books.indexOf(book);
//     books.splice(index, 1, updated);

//     writeJson(books, res);
//     res
//       .status(201, { "Content-Type": "application/json" })
//       .send(`Book with id ${book.id} has been updated`);
//   }
// };

// const updateBookcb = (req, res) => {
//   readJson(req, res, updateBook);
// };

// module.exports = {
//   updateBookcb,
// };

module.exports = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await validateBookPUT(req.body);
    const bookOldData = (await onebookq(id)).rows[0];
    if (!bookOldData) {
      throw CostumError(`user with id: ${id} can not been found`, 404);
    }
    let name; let author; let edition; let
      img;
    ({
      name = bookOldData.name, author = bookOldData.author, edition = bookOldData.edition,
      img = bookOldData.img,
    } = req.body);
    const bookNewData = {
      name, author, edition, img,
    };
    await updatebookq(id, bookNewData);
    return res
      .status(200)
      .json({
        massage: `user with id:${id} has been updated successfully`,
        updated_book: bookNewData,
      });
  } catch (err) {
    return next(err);
  }
};