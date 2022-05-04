// Using express
const express = require('express');

// Express app
const app = express();

// Set localhost port
const port = 3000;

// add a default route to the app
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// add a 'launchx' route to the app
app.get('/launchx', (req, res) => {
    res.send('Welcome to LaunchX!');
});

// add a 'explorersInNode' route to the app and return an object
app.get('/explorersInNode', (req, res) => {
    const explorer = {
        name: 'Explorer',
        msg: 'Hi!'
    }
    res.send(explorer);
});

app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params);
});

// start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});