/* eslint-disable no-console */
const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const bookRouter = require('./src/routes/bookRouter')();

const app = express();
const { green } = chalk;
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, './public/')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.render(
    'index',
    {}
  );
});

app.listen(port, () => {
  console.log(`Running on port ${green(port)}`);
});
