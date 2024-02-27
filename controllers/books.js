import Book from '../models/Book.js';

export const getAllBooks = async (req, res) => {
  try {
    const bookList = await Book.find();
    if (bookList.length === 0)
      return res.status(404).json({ message: 'No books found' });
    res.status(200).json(bookList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBook = (req, res) => {
  res.send('Delete Book');
};
