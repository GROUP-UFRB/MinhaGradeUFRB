const express = require('express');
const peopleController = require('../controllers/people');

const peopleRoutes = express.Router()

peopleRoutes.post('/login', peopleController.login);

peopleRoutes.post('/register', peopleController.register);

module.exports = peopleRoutes;