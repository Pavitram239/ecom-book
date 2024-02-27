import { body, param } from 'express-validator';

const bookInput = (req, res, next) => {
  const { title, author, genre, description } = req.body;
};
