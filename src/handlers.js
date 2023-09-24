const { nanoid } = require("nanoid");
const { books } = require("./books");
const { validateBook } = require("./utils");

const addBookHandler = (request, response) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
    const id = nanoid(16);
    const insertAt = new Date().toString();
    const updatedAt = insertAt;
    const fhinished = pageCount === readPage ? true : false;
    const newBook = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        fhinished,
        reading,
        insertAt,
        updatedAt
    };
    validateBook(newBook);

}