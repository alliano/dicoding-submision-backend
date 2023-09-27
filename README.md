# Untuk menjalankan
Install terlebih dahulu dependency nya menggunakan npm
``` bash
 npm install
```
untuk menjalankan unit test postman, langkah pertama install dulu newman menggunakan npm
``` bash
npm install newman --g
```
Untuk menjalankan server
``` bash
npm run start-dev
```
dan berikut ini perintah untuk menjalankan newman
``` bash
newman run Bookshelf\ API\ Test.postman_collection.json --environment Bookshelf\ API\ Test.postman_environment.json
```
# API SPEC
## Add book
POST `http://52.77.233.15:9000/books`  
Requst data
``` json
{
    "name": "the test",
    "year": 2001,
    "author": "aton wibowo",
    "summary": "memek linux edision",
    "publisher": "anton gamedian indo",
    "pageCount": 1000,
    "readPage": 25,
}
```
Response data  
``` json
{
    "status": "success",
    "message": "Buku berhasil ditambahkan",
    "data": {
        "bookId": "xJmC08_7LswTPIvT"
    }
}
```
## Get all books
GET `http://52.77.233.15:9000/books`  
Response data
``` json
{
    "status": "success",
    "data": {
        "books": [
            {
                "id": "IlvIl2dprzIGLZLF",
                "name": "memek linux edision",
                "publisher": "anton gamedian indo"
            }
        ]
    }
}
```
## Update book
PUT `http://52.77.233.15:9000/books/{id}`  
Request data
``` json
{
    "name": "memek linux edision",
    "year": 2001,
    "author": "aton wibowo koplak",
    "summary": "Linuxer with  anton doker full os memek linux anton edisien",
    "publisher": "anton gamedian indo",
    "pageCount": 1000,
    "readPage": 25,
    "reading": true
}
```
Response data  
``` json
{
    "status": "success",
    "message": "Buku berhasil diperbarui"
}
```
## Get book by id
GET `http://52.77.233.15:9000/books/{id}`  
Response data
``` json
{
    "status": "success",
    "data": {
        "book": {
            "id": "IlvIl2dprzIGLZLF",
            "name": "memek linux edision",
            "year": 2001,
            "author": "aton wibowo koplak",
            "summary": "Linuxer with  anton doker full os memek linux anton edisien",
            "publisher": "anton gamedian indo",
            "pageCount": 1000,
            "readPage": 25,
            "reading": true,
            "finished": false,
            "insertedAt": "Wed Sep 27 2023 05:25:38 GMT+0000 (Coordinated Universal Time)",
            "updatedAt": "Wed Sep 27 2023 05:40:21 GMT+0000 (Coordinated Universal Time)"
        }
    }
}
```
## Delete book by id
DELETE `http://52.77.233.15:9000/books/{id}`
Response data  
``` json
{
    "status": "success",
    "message": "Buku berhasil dihapus"
}
```
## Get book by name contain
GET `http://52.77.233.15:9000/books?name=memek`  
Response data  
``` json
{
    "status": "success",
    "data": {
        "books": [
            {
                "id": "xJmC08_7LswTPIvT",
                "name": "memek linux edision",
                "publisher": "anton gamedian indo"
            }
        ]
    }
}
```
## Get book by finised
GET `http://52.77.233.15:9000/books?finished=1` 
Response data  
``` json
{
    "status": "success",
    "data": {
        "books": [
            {
                "id": "xJmC08_7LswTPIvT",
                "name": "memek linux edision",
                "publisher": "anton gamedian indo"
            }
        ]
    }
}
```
Ket :
 * finished=1 artinya buku yang telah selesai dibaca
 * finished=0 artinya buku yang belum selesai dibaca