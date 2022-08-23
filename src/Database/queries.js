
const allBooks = "SELECT * FROM book";
const oneBook = "SELECT * FROM book WHERE id = $1";

module.exports = {
    allBooks,
    oneBook,
}