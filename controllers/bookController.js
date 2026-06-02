let books = require('../data/books');

// GET /books — fetch all books with optional search, genre, sort filters
const getAllBooks = (req, res) => {
  try {
    const { search, genre, sort } = req.query;
    let result = [...books];

    // Filter by search query (title or author)
    if (search && search.trim() !== '') {
      const query = search.toLowerCase();
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query)
      );
    }

    // Filter by genre
    if (genre && genre !== 'All') {
      result = result.filter(
        (book) => book.genre.toLowerCase() === genre.toLowerCase()
      );
    }

    // Sort alphabetically A-Z or Z-A
    if (sort === 'az') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === 'za') {
      result.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort === 'year') {
      result.sort((a, b) => b.year - a.year);
    }

    res.status(200).json({
      success: true,
      total: result.length,
      books: result
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// GET /books/:id — fetch single book
const getBookById = (req, res) => {
  try {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }
    res.status(200).json({ success: true, book });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// POST /books — add new book
const addBook = (req, res) => {
  try {
    const { title, author, genre, year, pages } = req.body;

    // Input validation
    if (!title || !author || !genre) {
      return res.status(400).json({
        success: false,
        message: 'Title, author, and genre are required fields'
      });
    }

    const newBook = {
      id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
      title: title.trim(),
      author: author.trim(),
      genre: genre.trim(),
      year: year || new Date().getFullYear(),
      pages: pages || 0,
      available: true
    };

    books.push(newBook);

    // Re-sort alphabetically after adding
    books.sort((a, b) => a.title.localeCompare(b.title));

    res.status(201).json({ success: true, message: 'Book added successfully', book: newBook });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// PUT /books/:id — update existing book
const updateBook = (req, res) => {
  try {
    const index = books.findIndex((b) => b.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    books[index] = { ...books[index], ...req.body };
    res.status(200).json({ success: true, message: 'Book updated successfully', book: books[index] });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// DELETE /books/:id — delete book
const deleteBook = (req, res) => {
  try {
    const index = books.findIndex((b) => b.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    const deleted = books.splice(index, 1);
    res.status(200).json({ success: true, message: 'Book deleted successfully', book: deleted[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

module.exports = { getAllBooks, getBookById, addBook, updateBook, deleteBook };