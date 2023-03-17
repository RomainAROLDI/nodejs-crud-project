const express = require('express');
const app = express();
const port = 3000;
const Teams = require('./data/teams');

app.use('/assets', express.static('./client/assets'));
app.use(express.json());

app.listen(port, () => {
    console.log('Server listening on localhost:' + port);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

app.get('/teams', (req, res) => {
    res.send(Teams);
});