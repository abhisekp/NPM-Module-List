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
                .css({
                    'color': randRGBStr('DARK'),
                    'background-color': randRGBStr('LIGHT')
                })
                .html(npmLS_)
                .appendTo(fragment);

            npmLS = npmLS.slice(NUMBER_OF_MODULES);
        }
        $('body').append(fragment);

        if (typeof Clipboard !== 'undefined') {
            var clipboard = new Clipboard('.container > div', {
                target: function (trigger) {
                    logger.debug(trigger);
                    logger.info('Selected');
                    return trigger;
                }
            }).on('success', function (e) {
                logger.debug(e);
                $(e.target).select();
                // e.clearSelection();
            }).on('error', function (e) {
                logger.error(e);
            });
        }

        // $('div').empty();
    });
});

function randRGBStr(colorType) {
    var min = 0,
        max = 255;
    colorType = colorType || 'DARK';
    switch (colorType) {
    case 'DARK':
        max = 128;
        break;
    case 'LIGHT':
        min = 128;
        break;
    }
    var red = genRandom(min, max);
    var green = genRandom(min, max);
    var blue = genRandom(min, max);

    var str = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    return str;
}

function genRandom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
