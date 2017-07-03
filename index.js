/* -------------------------------------------------------
    INDEX
-------------------------------------------------------- */

const Twitter = require('twit');

const logger = require('./main/logger');
const scraper = require('./main/scraper');
const { AUTH } = require('./config.json');

const twitter = new Twitter(AUTH.Twitter);

logger.info('=== START ===');

const start = async function () {
    const quote = await scraper.getQuote();

    logger.info(`Tweet: ${ quote }`);

    twitter.post('statuses/update', { status: quote },
        error => {
            if (error) { logger.error(error) }

            logger.info(`Tweet sent successfully!`);
        });
};

start();
