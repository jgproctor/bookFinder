import xml2js from 'xml2js';
import debug from 'debug';
import axios from 'axios';

const { get } = axios;
const { Parser } = xml2js;

debug('app:goodreadsService');

const parser = new Parser({ explicitArray: false });

function goodreadsService() {
  function searchBooks(searchQuery) {
    return new Promise((resolve, reject) => {
      get(`https://www.goodreads.com/search/index.xml?key=T80WiLWEoAzYnXWFqsAA&q=${searchQuery}`)
        .then((response) => {
          parser.parseString(response.data, (err, result) => {
            if (err) {
              debug(err);
            } else {
              debug(result);
              resolve(result.GoodreadsResponse.search.results.work);
            }
          });
        })
        .catch((error) => {
          reject(error);
          debug(error);
        });
    });
  }
  return searchBooks;
}

export default goodreadsService();
