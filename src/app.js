const express = require('express');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const petRoutes = require('./routes/petRoutes');

const errorMiddleware = require(
  './middlewares/errorMiddleware'
);

const app = express();

app.use('/users', userRoutes);

app.use('/pets', petRoutes);

app.use('/', authRoutes);

app.use(errorMiddleware);


app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensagem: 'API funcionando!' });
});

module.exports = app;