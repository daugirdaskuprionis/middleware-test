const express = require('express');
const app = express();

app.use(logger);

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/users', auth, (req, res) => {
    res.send('Users');
});

function logger(req, res, next) {
    console.log('Logger');
    next();
}

function auth(req, res, next) {
    console.log('Auth');
    next();
}

app.listen(8080, () => {console.log(`Server starts`)})