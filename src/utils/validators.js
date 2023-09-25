const validateBook = (data) => {
    if(data.name === undefined){
        return {
            error: true,
            status: 'fail',
            message: 'Gagal menambahkan buku. Moho isi nama buku'
        };
    }
    else if(data.pageCount === data.readPage) {
        return {
            error: true,
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
        }
    }
    else {
        return { 
            error: false,
            status: 'success',
            message: 'Buku berhasil ditambahkan',
        }
    }
};

module.exports = { validateBook }