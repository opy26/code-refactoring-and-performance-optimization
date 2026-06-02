const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
} = require('../controllers/bookController');

// GET    /books         — get all books (supports ?search=&genre=&sort=)
// GET    /books/:id     — get single book
// POST   /books         — add new book
// PUT    /books/:id     — update book
// DELETE /books/:id     — delete book

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;