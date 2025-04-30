var http = require('http'); // include module for the http server
var url = require('url'); // include module to split the query string
var dt = require('./mytime');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query; // returns an object
    res.end('Hello World! The time is: '+dt.myDateTime()+'.   This month is: ' + q.month);
}).listen(8080);

console.log('Server running at http://127.0.0.1:8081/');
