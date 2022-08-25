const allBooksq = require('./bookQueries/allbooks-query');
const onebookq = require('./bookQueries/onebook-query');
const postbookq = require('./bookQueries/postbook-query');
const updatebookq = require('./bookQueries/putbook-query');
const deletebookq = require('./bookQueries/deletebook-query');

module.exports = {
    allBooksq,
    onebookq,
    postbookq,
    updatebookq,
    deletebookq
}