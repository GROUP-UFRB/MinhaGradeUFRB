const express = require('express');
const studentController = require('../controllers/student');

const studentRoutes = express.Router()

studentRoutes.get('/', studentController.all);
studentRoutes.post('/create', studentController.create);

module.exports = studentRoutes;