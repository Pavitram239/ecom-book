import express from 'express';
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from '../controllers/books.js';
const router = express.Router();

router.route('/').get(getAllBooks).post(createBook);
router.route('/:id').get(getBook).post(updateBook).delete(deleteBook);

export default router;
