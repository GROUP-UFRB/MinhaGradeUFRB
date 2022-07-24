const express = require('express');
const routes = express.Router()

const userRoutes = require('./users');

routes.use('/users', userRoutes);

module.exports = routes;