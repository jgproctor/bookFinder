/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
const express = require('express');
const searchBooks = require('../services/goodreadsService.js');

function router() {
  const bookRouter = express.Router();

  function renderResults(res, results) {
    res.render(
      'books.ejs',
      {
        results
      }
    );
  }

  bookRouter.route('/search/books')
    .get((req, res) => {
      (async function search() {
        if (req.query.q && req.query.q !== '') {
          const results = await searchBooks(req.query.q);
          renderResults(res, results);
        } else {
          const results = await searchBooks();
          renderResults(res, results);
        }
      }());
    });

  return bookRouter;
}

module.exports = router;
