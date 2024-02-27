import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import Book from './models/Book.js';
import books from './utils/book.json' assert { type: 'json' };

// const bookList = JSON.parse(books);
try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('connected to DB');
  await Book.insertMany(books);
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
