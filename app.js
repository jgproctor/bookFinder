/* eslint-disable no-console */
import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import bookRouter from './src/routes/bookRouter.js';

const app = express();
const { green } = chalk;
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

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
