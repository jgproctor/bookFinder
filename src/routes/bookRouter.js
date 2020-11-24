/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import express from 'express';
import searchBooks from '../services/goodreadsService.js';

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
      console.log("3");
      (async function search() {
        if (req.query.q && req.query.q !== '') {
          console.log("Hello!");
          const results = await searchBooks(req.query.q);
          renderResults(res, results);
        } else {
          console.log("2");
          const results = await searchBooks();
          renderResults(res, results);
        }
      }());
    });

  return router;
}
