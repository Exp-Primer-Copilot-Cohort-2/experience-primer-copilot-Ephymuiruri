// create web server
// 1. import express
const express = require('express');
// 2. create express app
const app = express();
// 3. create a port
const port = 3000;
// 4. create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// 5. start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});