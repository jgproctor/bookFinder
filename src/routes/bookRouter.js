/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import express from 'express';
import debug from 'debug';
import searchBooks from '../services/goodreadsService.js';

debug('app:bookRouter');

const { Router } = express;

export default function bookRouter() {
  const router = Router();

  function renderResults(res, results) {
    res.render(
      'books.ejs',
      {
        results
      }
    );
  }

  router.route('/search/books')
    .get((req, res) => {
      (async function search() {
        if (req.query.q && req.query.q !== '') {
          const results = await searchBooks(req.query.q);
          console.log(results);
          renderResults(res, results);
        } else {
          const results = await searchBooks();
          renderResults(res, results);
        }
      }());
    });

  return router;
}
