const express = require('express');
const routes = express.Router()

const peopleRoutes = require('./people');
const studentRoutes = require('./student');

routes.use('/people', peopleRoutes);
routes.use('/student', studentRoutes);

module.exports = routes;