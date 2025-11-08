const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRouter');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/tours', tourRouter);

//Error handling for undefined routes
app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling middleware
app.use(globalErrorHandler);

module.exports = app;
