const mapping = (arrayOfBook) => arrayOfBook.map((book) => ({
  id: book.id,
  name: book.name,
  publisher: book.publisher,
}));
module.exports = { mapping };
