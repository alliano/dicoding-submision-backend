const { nanoid } = require("nanoid");

const books = [
    {
        "id": nanoid(16),
        "name": "the lord anton",
        "year": 2001,
        "author": "aton wibowo",
        "summary": "Linuxer with anton",
        "publisher": "anton gamedian indo",
        "pageCount": 1000,
        "readPage": 25,
        "reading": true,
        "insertedAt": new Date().toString(),
        "updatedAt": new Date().toString()
    },
    {
        "id": nanoid(16),
        "name": "the lord anton",
        "year": 2001,
        "author": "aton wibowo",
        "summary": "Linuxer with anton",
        "publisher": "anton gamedian indo",
        "pageCount": 1000,
        "readPage": 25,
        "reading": true,
        "insertedAt": new Date().toString(),
        "updatedAt": new Date().toString()
    },
    {
        "id": nanoid(16),
        "name": "Refactoring",
        "year": 2001,
        "author": "aton wibowo",
        "summary": "Linuxer with anton",
        "publisher": "anton gamedian indo",
        "pageCount": 1000,
        "readPage": 25,
        "reading": true,
        "insertedAt": new Date().toString(),
        "updatedAt": new Date().toString()
    },
    {
        "id": nanoid(16),
        "name": "Docker full os",
        "year": 2001,
        "author": "aton wibowo",
        "summary": "Linuxer with anton",
        "publisher": "anton gamedian indo",
        "pageCount": 1000,
        "readPage": 25,
        "reading": true,
        "insertedAt": new Date().toString(),
        "updatedAt": new Date().toString()
    },
    {
        "id": 'o9OgvlldmfLBtg_g',
        "name": "memek linux edision",
        "year": 2001,
        "author": "aton wibowo",
        "summary": "Linuxer with anton",
        "publisher": "anton gamedian indo",
        "pageCount": 1000,
        "readPage": 25,
        "reading": true,
        "insertedAt": new Date().toString(),
        "updatedAt": new Date().toString()
    },
];

module.exports = { books };