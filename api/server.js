const express = require("express");

const accountRouter = require('./accounts/accounts-router')

const server = express();

server.use('/api/accounts', accountRouter)

server.use(express.json());

module.exports = server;
