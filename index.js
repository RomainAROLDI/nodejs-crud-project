const app = require('express')();
const port = 3000;

app.listen(port, () => {
    console.log('Server listening on localhost:' + port);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});