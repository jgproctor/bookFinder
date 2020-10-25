const axios = require('axios');
const xml2js = require('xml2js');
const debug = require('debug')('app:goodreadsService');

const parser = xml2js.Parser({ explicitArray: false });

function goodreadsService() {
  function searchBooks(searchQuery) {
    return new Promise((resolve, reject) => {
      axios.get(`https://www.goodreads.com/search/index.xml?key=T80WiLWEoAzYnXWFqsAA&q=${searchQuery}`)
        .then((response) => {
          parser.parseString(response.data, (err, result) => {
            if (err) {
              debug(err);
            } else {
              debug(result);
              resolve(result.GoodreadsResponse.book);
            }
          });
        })
        .catch((error) => {
          reject(error);
          debug(error);
        });
    });
  }
  return { searchBooks };
}

module.exports = goodreadsService();
