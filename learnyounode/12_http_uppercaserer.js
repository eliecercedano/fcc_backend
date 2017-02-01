var http = require('http');
var map = require('through2-map');
var puerto = process.argv[2];

http.createServer(function (req, res) {
    req.pipe(map(function (data) {
            return data.toString().toUpperCase();
        })).pipe(res);
}).listen(puerto);