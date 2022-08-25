const { allBooksq } = require('../../Database/queries/index');

// // const queries = require ('../../Database/queries');
// // const pool = require('../../Database/config/db');

// const allBooks = (req, res) => {
//   // const books = JSON.parse(data);
//   // console.log(books);
//   // res.json(books.filter((el) => el.deleted !== 'true'));
//   pool.query(queries.allBooks, (err, data) => {
//     if (err) throw err;
//     res.status(200).json(data.rows);
//   })
// };

// const allBookscb = (req, res) => {
//   readJson(req, res, allBooks);
// };

// module.exports = {
//   allBookscb,
// };

module.exports = async (req, res, next) => {
  try{
    const books = (await allBooksq()).rows;
    return res.json(books);
  } catch(err) {
    return next(err);
  }
}
