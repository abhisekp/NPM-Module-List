/* global log4js */

define(function app(require) {
    var logger;
    if (typeof log4js !== 'undefined') {
        logger = log4js && log4js.getLogger();
    }

    if (logger) {
        logger.addAppender(new log4js.BrowserConsoleAppender);
        logger.info('App Loaded');
    }

    if (typeof $ !== 'undefined') {
        logger && logger.info('jQuery Loaded');
    }

    function init() {
        require('UI').render();
    }

    return {
        init: init
    };

});
