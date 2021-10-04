// server.js

// define app
const express = require('express');

const app = express();

// define host ip and port
const HOST = '127.0.0.1';
// set port to env or 3000
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.listen(PORT, HOST, () => {
    console.log(`Server connected at ${HOST}:${PORT}`);
});