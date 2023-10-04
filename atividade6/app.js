const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.post('/dados', (req, res) => {
    res.render('dados', {data: req.body});
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
