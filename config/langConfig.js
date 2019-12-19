var i18n = require('i18n');
var initLangConfig = (app) => {

    app.use(i18n.init);
    i18n.configure({
        locales:['en', 'cn', 'vi', 'kr'],
        directory: __dirname + '/locales',
        cookie: 'lang',
        objectNotation: true
    });
}

module.exports = initLangConfig;