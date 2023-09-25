const { nanoid } = require('nanoid')
const { books } = require("./books");
const { validateBook } = require("./utils/validators");

const addBookHandler = (request, h) => {
    const id = nanoid(16);
    const { error, status, message, data = { bookId : id} } = validateBook(request.payload);
    if (error){
        return h.response({ status, message }).code(400);
    }
    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading
    } = request.payload;
    const fhinished = pageCount === readPage ? true : false;
    const insertedAt = new Date().toString();
    const updatedAt = insertedAt;
    books.push({
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
        fhinished,
        insertedAt,
        updatedAt
    })
    console.log(books);
    return h.response({status, message, data}).code(201);
}

const getAllBooksHandler = () => {
    const booksResponse = new Array();
    books.forEach(book => {
        booksResponse.push({
            id: book.id,
            name: book.name,
            publisher: book.publisher
        });
    });
    return {
        status: 'success',
        data: {
            books: booksResponse
        }
    };
};

const getBookById = (requst, h) => {
    const { id } = requst.params;
    const book = books.filter(book => book.id === id)[0];
    if (book == undefined){
        return h.response({
            status: 'fail',
            message: 'Buku tidak ditemukan'
        }).code(400);
    }
    return h.response({
        status: 'success',
        data: {
            book,
        },
    });
};

const updateBookById = (request, h) => {
    const { id } = request.params;
    const index = books.findIndex(book => book.id === id);
    const { error, status, message } = validateBook(request.payload);
    if(index === -1){
        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. id tidak ditemukan'
        }).code(400);
    }
    if(error) {
        return h.response({
            status,
            message
        }).code(400);
    }
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
    const updatedAt = new Date().toString();
    books[index] = {
     ...books[index], name, year, author, summary, publisher, pageCount, readPage, reading, updatedAt
    };
    return h.response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
     }).code(200);
}

const deleteBookById = (request, h) => {
    const { id } = request.params;
    const index = books.findIndex(book => book.id === id);
    if (index === -1) {
        return h.response({
            status: 'fail',
            message: 'Buku gagal dihapus. Id tidak ditemukan'
        }).code(404);
    }
    books.splice(index, 1);
    return h.response({
        status: 'success',
        message: 'Buku berhasil dihapus'
    }).code(200);
}

module.exports = { addBookHandler, getAllBooksHandler, getBookById, updateBookById, deleteBookById }