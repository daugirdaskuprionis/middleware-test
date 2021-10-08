const express = require('express');
const app = express();

app.use(logger);

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/users', (req, res) => {
    res.send('Users');
});

function logger(req, res, next) {
    console.log('Log');
    next();
}

app.listen(8080, () => {console.log(`Server starts`)})