/* -------------------------------------------------------
    INDEX
-------------------------------------------------------- */

const Twitter = require('twit');

const logger = require('./logger');
const { AUTH, MAX_RETRY_COUNT } = require('../config.json');

const twitter = new Twitter(AUTH.Twitter);

const retry = (() => {
    let counter = 0;

    return function (stage) {
        if (counter >= MAX_RETRY_COUNT) {
            logger.error(`ERROR - Retried ${ counter } times. Stopping due to too many errors.`);
            return;
        }

        logger.info(`WARN - Failed to Tweet Drake lyrics at ${ stage } stage. Retrying ${ ++counter } time(s)...`);
        start();
    };
})();

logger.info('=== START ===');

const start = async function () {

};

start();
