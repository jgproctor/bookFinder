import express from 'express';
import searchBooks from '../services/goodreadsService.js';

function router() {
  const bookRouter = express.router();

  bookRouter.route('/search/books')
    .get((req, res) => {
      if (req.query.q) {
        const results = searchBooks(req.query.q);
        res.json(results);
      } else {
        const allBooks = searchBooks();
        res.json(allBooks);
      }
    });

  return bookRouter;
}

module.exports = router();
