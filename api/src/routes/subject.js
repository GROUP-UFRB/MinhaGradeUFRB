const express = require('express');
const subjectController = require('../controllers/subject');

const subjectRoutes = express.Router()

subjectRoutes.get('/', subjectController.all);
subjectRoutes.get('/:id', subjectController.index);
subjectRoutes.get('/code/:subject_code', subjectController.code);
subjectRoutes.post('/create', subjectController.create);

module.exports = subjectRoutes;