const express = require('express');
const app = express();
const port = 3000;
const Teams = require('./data/teams');
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');

app.use('/assets', express.static('./client/assets'));
app.use('/pages', express.static('./client/pages'));
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

app.get('/team/:id', (req, res) => {
    const id = req.params.id;
    const team = _.find(Teams, (o) => {
        return o._id === id;
    });
    res.send(team);
});

app.put('/team/:id', (req, res) => {
    const id = req.params.id;
    const index = _.findIndex(Teams, (o) => {
        return o._id === id;
    });

    Teams[index] = req.body;
    res.sendStatus(200);
});

app.post('/team', (req, res) => {
    const newTeam = req.body;
    newTeam._id = uuidv4();
    // console.log(newFilm);
    Teams.push(newTeam);
    res.sendStatus(200);
});