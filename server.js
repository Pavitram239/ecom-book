import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('Hello');
});

// Routes
import bookRoutes from './routes/books.js';

app.use('/api/v1/books/', bookRoutes);

const PORT = process.env.PORT || 5100;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('DB Connected');
    app.listen(PORT, () => {
      console.log('server started');
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(error);
  });
