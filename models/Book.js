import mongoose from 'mongoose';
import { GENRES } from '../utils/constants.js';
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'title is required'],
  },
  author: {
    type: String,
    required: [true, 'author is required'],
  },
  isbn: {
    type: String,
    required: [true, 'isbn is required'],
  },
  genre: {
    type: String,
    required: [true, 'genre is required'],
    enum: GENRES,
    default: GENRES[0],
  },
  description: {
    type: String,
    required: [true, 'description is required'],
    maxlength: [500, 'description must be less than 500 characters'],
    minlength: [10, 'description must be at least 10 characters'],
    trim: true,
  },
  //   image: {
  //     type: String,
  //     required: [true, 'image is required'],
  //   },
});

export default mongoose.model('Book', bookSchema);
