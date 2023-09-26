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