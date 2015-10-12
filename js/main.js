/* global requirejs */

requirejs.config({
    baseURL: 'js',
    enforceDefine: true,
    shim: {
        log4js: {
            exports: 'log4javascript'
        },
        clipboard: {
            exports: 'Clipboard'
        }
    },
    paths: {
        clipboard: ['vendor/clipboard.min', '//cdn.rawgit.com/zenorocha/clipboard.js/master/dist/clipboard.min'],
        jquery: ['vendor/jquery.min', '//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min'],
        log4js: ['vendor/log4javascript.min',
            '//cdnjs.cloudflare.com/ajax/libs/log4javascript/1.4.9/log4javascript.min'
        ],
        app: ['app'],
        UI: ['UI']
    },
    packages: [{
        name: 'UI',
        main: 'UI'
    }],
    waitSeconds: 0
});

define(['jquery', 'log4js'], function ($, log4js) {
    this.log4js = log4js;

    require(['app'], function (app) {
        app.init();
    });

});
