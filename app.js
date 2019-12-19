var express = require('express');
var cookieParser = require('cookie-parser');
var initRouter = require('./routes/index');
var initViewConfig = require('./config/viewConfig');
var initLangConfig = require('./config/langConfig');
var app = express();
    
app.use(cookieParser());
// config view
initViewConfig(app);

// config multi lang
initLangConfig(app);

var port = process.env.PORT || 3000;
initRouter(app);
app.listen(port, ()=> {
    console.log(`connecting on ${port}`);
});