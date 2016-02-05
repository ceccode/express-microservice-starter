require('dotenv').config({path: '.env' + (process.env.NODE_ENV ? '.' + process.env.NODE_ENV : '')});

var express = require('express');
var http = require('http');
var morgan = require('morgan');
var logger = require('./logger');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var logger = require('./logger');
var utils = require('./utils');

var errorHandler = require('./errors').errorHandler;
var port = utils.normalizePort(process.env.APP_PORT || '3000');

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('combined', {
  stream: logger.stream
}));

app.use('/', require('./routes/index'));
app.use(errorHandler);

app.set('port', port);
logger.info('Listen on http://localhost:', port);

var server = http.createServer(app);
server.listen(port);

module.exports = server;
