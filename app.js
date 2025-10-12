const express = require('express');
const tourRouter = require('./routes/tourRouter');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/tours', tourRouter);

// Test route
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello from the server side!'
  });
});

module.exports = app;
