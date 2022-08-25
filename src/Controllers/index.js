const allBookscb = require('./bookAction/allBooks');
const oneBookcb = require('./bookAction/oneBook');
const postBookcb = require('./bookAction/post');
const updateBookcb = require('./bookAction/update');
const deletBookcb = require('./bookAction/delete');

module.exports = {
    allBookscb,
    oneBookcb,
    postBookcb,
    updateBookcb,
    deletBookcb
}