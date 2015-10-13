define(function (require) {

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

    return {
        genRandom: genRandom,
        randRGBStr: randRGBStr
    };

});
