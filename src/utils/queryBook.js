/* eslint-disable eqeqeq */
function findBook(books, query) {
  if (query.name !== undefined) {
    return books.filter((book) => book.name.toLowerCase().includes(query.name.toLowerCase()));
  }
  if (query.reading == 1) {
    return books.filter((book) => book.reading == 1);
  }
  if (query.reading == 0) {
    return books.filter((book) => book.reading == 0);
  }
  if (query.finished !== undefined) {
    if (query.finished == 1) {
      return books.filter((book) => book.finished == 1);
    }
    if (query.finished == 0) {
      return books.filter((book) => book.finished == 0);
    }
  }
  return 0;
}

const findByReadingTrue = (books, query) => findBook(books, query);

const fingByReadingBookFalse = (books, query) => findBook(books, query);

const findBookByName = (books, query) => findBook(books, query);

const findBookByFinishedTrue = (books, query) => findBook(books, query);

const findBookByFinishedFalse = (books, query) => findBook(books, query);

module.exports = {
  findBookByName,
  fingByReadingBookFalse,
  findByReadingTrue,
  findBookByFinishedTrue,
  findBookByFinishedFalse,
};
