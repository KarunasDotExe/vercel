const express = require('express');
const serverless = require('serverless-http');

const app = express()
const port = 3000

app.get('/api', (req, res) => {
    res.json({message: 'Hello from the API!'});
});

module.exports = app;
module.exports.handler = serverless(app)