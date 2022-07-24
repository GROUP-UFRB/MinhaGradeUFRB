const express = require('express');
const routes = require('./routes');
const app = express();

app.use(routes);

app.get('/', (req, res) => {
    return res.json({message: 'Hello world!'});
});

app.listen(3000, () => {
    console.log('Server is running in port 3000');
});
