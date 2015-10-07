/* global log4javascript, Clipboard */

var NUMBER_OF_MODULES = 8;

var log4js = log4javascript,
    logger = log4js.getLogger();
logger.addAppender(new log4js.BrowserConsoleAppender());

$(document).ready(function () {

    $.get('data/npm-modules.json').success(function (data) {
        var npmLS = Object.keys(data.dependencies);
        var fragment = $('<div>').addClass('container');
        while (npmLS.length) {
            var npmLS_ = npmLS.slice(0, NUMBER_OF_MODULES);
            npmLS_ = npmLS_.join(' ');
            logger.debug(npmLS_);

            var div = $('<div>')
                .html(npmLS_)
                .appendTo(fragment);

            npmLS = npmLS.slice(NUMBER_OF_MODULES);
        }
        $('body').append(fragment);

        // $('div').empty();
    });
});
