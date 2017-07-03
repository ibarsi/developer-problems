/* -------------------------------------------------------
    SCRAPER
-------------------------------------------------------- */

require('isomorphic-fetch');
const cheerio = require('cheerio');

const URL = 'http://developerexcuses.com/';

const getQuote = async function () {
    return fetchDOM(URL)
        .then($ => {
            const content = $('center', '.wrapper').text();

            return content;
        });
};

const fetchDOM = async function (url, options = {}) {
    if (!url) { throw new Error('URL cannot be invalid.') }

    return fetch(url, options)
        .then(response => {
            if (response.status !== 200) { throw new Error(`ERROR: ${ response.status } - ${ response.statusText }`); }

            return response.text()
        })
        .then(html => cheerio.load(html));
}

module.exports = {
    getQuote
};
