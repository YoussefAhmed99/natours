const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRouter');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/tours', tourRouter);

module.exports = app;
