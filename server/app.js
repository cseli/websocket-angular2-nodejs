'use strict';
const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);

app.use((req, res, next) => {
    console.log('middleware');
    req.testing = 'testing';
    next();
});

app.get('/', (req, res, next) => {
    console.log('get route', req.testing);
    res.end("ghjk");
});

app.ws('/', (ws, req) => {
    ws.on('message', (msg) => {
        console.log(msg);
        ws.send(msg);
    });
    console.log('socket', req.testing);
});

app.listen(8080);