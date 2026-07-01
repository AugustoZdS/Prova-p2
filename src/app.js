const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');
const authRoutes = require('./routes/authRoutes');
const adoptionRoutes = require('./routes/adoptionRoutes');

const errorMiddleware = require(
  './middlewares/errorMiddleware'
);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);

app.use('/pets', petRoutes);

app.use('/', authRoutes);

app.use('/adoptions', adoptionRoutes);

app.use(errorMiddleware);

module.exports = app;