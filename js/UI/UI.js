/* global Clipboard, log4js */

define(function (require) {
    var logger = log4js.getLogger('UI');
    logger.addAppender(new log4js.BrowserConsoleAppender);
    logger.info('UI Loaded');

    var random = require('../util/random'),
        randRGBStr = random.randRGBStr;

    var Clipboard = require('clipboard');

    function render() {
        var NUMBER_OF_MODULES = 8;

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

                $('.container > div').addClass('selectable');


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

        });

    }

    return {
        render: render
    };

});
