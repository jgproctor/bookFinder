const express = require('express');
const chalk = require('chalk');
const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send("Book Finder App!");
});

app.listen(port, () => {
    console.log(`Running on port ${chalk.green(port)}`);
});