var express = require('express');
var expressEjsExtend = require('express-ejs-extend');

var initViewConfig = (app) => {
    app.use(express.static("./public"));
    app.engine("ejs", expressEjsExtend);
    app.set("view engine", "ejs");
    app.set("views", "./views");
}

module.exports = initViewConfig;