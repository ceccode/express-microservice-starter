
exports.normalizePort = function(port) {
  var port = parseInt(port, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}
