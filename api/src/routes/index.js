const express = require('express');
const routes = express.Router()

const peopleRoutes = require('./people');

routes.use('/people', peopleRoutes);

module.exports = routes;