const express = require('express');
const studentController = require('../controllers/student');

const studentRoutes = express.Router()

studentRoutes.get('/', studentController.all);
studentRoutes.get('/:id', studentController.index);
studentRoutes.post('/create', studentController.create);
studentRoutes.post('/create_by_history', studentController.create);

module.exports = studentRoutes;