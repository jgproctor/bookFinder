/* eslint-disable no-multi-assign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import bookRouter from '../routes/bookRouter.js';

const { urlencoded, json } = bodyParser;
const { join, dirname } = path;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const server = express();
const { green } = chalk;

server.use(urlencoded({ extended: true }));
server.use(json());
server.use(morgan('tiny'));
server.use(express.static(join(__dirname, '../../public')));
server.use(express.static(join(__dirname, '../../assets/images')));
server.set('views', './src/views');
server.set('view engine', 'ejs');

server.use('/api', bookRouter());

server.get('/', (req, res) => {
  res.render(
    'index',
    {}
  );
});

server.listen(process.env.PORT || 5000);
