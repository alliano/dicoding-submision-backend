/* eslint-disable eqeqeq */
const { nanoid } = require('nanoid');
const { books } = require('./books');
const { mapping } = require('./utils/helper');
const {
  findBookByName,
  fingByReadingBookFalse,
  findBookByFinishedFalse,
  findBookByFinishedTrue,
} = require('./utils/queryBook');
const { validateBook, validateBookForUpdate, responseMessage } = require('./utils/validators');

const addBookHandler = (request, h) => {
  const id = nanoid(16);
  const {
    error, status, message, data = { bookId: id },
  } = validateBook(request.payload);
  if (error) {
    return h.response({ status, message }).code(400);
  }
  const requestJson = request.payload;
  const finished = requestJson.pageCount === requestJson.readPage;
  const insertedAt = new Date().toString();
  const updatedAt = insertedAt;

  books.push({
    id, ...requestJson, finished, insertedAt, updatedAt,
  });
  return h.response({ status, message, data }).code(201);
};

const getAllBooksHandler = (request, h) => {
  const { reading } = request.query;
  if (reading !== null || reading !== undefined) {
    if (reading == 1) {
      return h.response({
        status: 'success',
        data: {
          books: mapping(findBookByFinishedTrue(books, request.query)),
        },
      }).code(200);
    }
    if (reading == 0) {
      return h.response({
        status: 'success',
        data: {
          books: mapping(fingByReadingBookFalse(books, request.query)),
        },
      }).code(200);
    }
    if (request.query.name !== undefined) {
      return h.response({
        status: 'success',
        data: {
          books: mapping(findBookByName(books, request.query)),
        },
      }).code(200);
    }
    if (request.query.finished !== undefined) {
      const { finished } = request.query;
      if (finished == 1) {
        return h.response({
          status: 'success',
          data: {
            books: mapping(findBookByFinishedTrue(books, request.query)),
          },
        }).code(200);
      }
      if (finished == 0) {
        return h.response({
          status: 'success',
          data: {
            books: mapping(findBookByFinishedFalse(books, request.query)),
          },
        }).code(200);
      }
    }
  }

  const booksResponse = [];
  books.forEach((book) => {
    booksResponse.push({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    });
  });
  return {
    status: 'success',
    data: {
      books: booksResponse,
    },
  };
};

const getBookById = (requst, h) => {
  const { id } = requst.params;
  const book = books.filter((b) => b.id === id)[0];
  if (book == undefined) {
    return h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    }).code(404);
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
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    const { status, message } = responseMessage(true, 'fail', 'Gagal memperbarui buku. Id tidak ditemukan');
    return h.response({
      status, message,
    }).code(404);
  }
  const {
    error,
    status,
    message,
  } = validateBookForUpdate(request.payload);

  if (error) {
    return h.response({
      status,
      message,
    }).code(400);
  }
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;
  const finished = pageCount === readPage;
  const updatedAt = new Date().toString();
  books[index] = {
    ...books[index],
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    finished,
    readPage,
    reading,
    updatedAt,
  };
  return h.response({
    status,
    message,
  }).code(200);
};

const deleteBookById = (request, h) => {
  const { id } = request.params;
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    return h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    }).code(404);
  }
  books.splice(index, 1);
  return h.response({
    status: 'success',
    message: 'Buku berhasil dihapus',
  }).code(200);
};

module.exports = {
  addBookHandler, getAllBooksHandler, getBookById, updateBookById, deleteBookById,
};
