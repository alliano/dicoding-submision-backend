const responseMessage = (error, status, message) => ({
  error,
  status,
  message,
});
const validateBook = (data) => {
  if (data.name === undefined) {
    return responseMessage(true, 'fail', 'Gagal menambahkan buku. Mohon isi nama buku');
  }
  if (data.pageCount < data.readPage) {
    return responseMessage(true, 'fail', 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount');
  }

  return responseMessage(false, 'success', 'Buku berhasil ditambahkan');
};

const validateBookForUpdate = (data) => {
  if (data.name === undefined) {
    return responseMessage(true, 'fail', 'Gagal memperbarui buku. Mohon isi nama buku');
  }
  if (data.pageCount < data.readPage) {
    return responseMessage(true, 'fail', 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount');
  }

  return responseMessage(false, 'success', 'Buku berhasil diperbarui');
};

module.exports = { validateBook, validateBookForUpdate, responseMessage };
