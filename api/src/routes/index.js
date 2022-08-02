const express = require('express');
const routes = express.Router()

const peopleRoutes = require('./people');
const studentRoutes = require('./student');
const subjectRoutes = require('./subject');
const centerRoutes = require('./center');

routes.use('/people', peopleRoutes);
routes.use('/student', studentRoutes);
routes.use('/subject', subjectRoutes);
routes.use('/center', centerRoutes);

module.exports = routes;