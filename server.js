const express = require('express');

const db = require('./data/db_config.js');

const server = express();

server.get('/', (req, res) => {
    res.status(200);
    res.send("This is the entry point");
})


module.exports = server;