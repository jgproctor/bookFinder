/* eslint-disable import/extensions */
const express = require('express');
const searchBooks = require('../services/goodreadsService.js');

async function router() {
  const bookRouter = express.Router();

  bookRouter.route('/search/books')
    .get((req, res) => {
      (async function search() {
        if (req.query.q) {
          const results = await searchBooks(req.query.q);
          console.log(results);
          res.json(results);
        } else {
          const allBooks = await searchBooks();
          res.json(allBooks);
        }
      }());
    });

  return bookRouter;
}

module.exports = router;
