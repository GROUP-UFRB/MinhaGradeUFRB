const express = require('express');
const centerController = require('../controllers/center');

const centerRoutes = express.Router()

centerRoutes.post('/create', centerController.create);
centerRoutes.get('/', centerController.all);
centerRoutes.get('/:cod_center', centerController.code);

module.exports = centerRoutes;