const express = require('express');
const userRoutes = express.Router()

userRoutes.get('/', (req, res) => {
    return res.json({message: 'Users routes'});
});

module.exports = userRoutes;