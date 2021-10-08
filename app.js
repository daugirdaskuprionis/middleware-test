const express = require('express');
const app = express();

app.use(logger);

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/users', auth, (req, res) => {
    if (req.query.user) {
        res.send(`User logged in as ${req.query.user}`);
    } else {
        res.send(`Users`);
    }
});

function logger(req, res, next) {
    console.log('Logger');
    next();
}

function auth(req, res, next) {
    if (req.query.user === 'user123') {
        next();
    } else {
        res.send('No auth');
    }
}

app.listen(8080, () => {console.log(`Server starts`)})