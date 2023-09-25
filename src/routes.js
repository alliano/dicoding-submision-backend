const { addBookHandler, getAllBooksHandler, getBookById, updateBookById } = require("./handlers");

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookById
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: updateBookById
    }
];
module.exports = { routes }