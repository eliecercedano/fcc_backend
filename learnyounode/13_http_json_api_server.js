var http = require('http')
var puerto = process.argv[2];
var url = require('url');

http.createServer(function (req, res) {
    var obj = url.parse(req.url, true);
    var  path = obj.pathname;
    var  strtime = obj.query.iso;
    var  dat;
    if (path == '/api/parsetime') {
        dat = getTObj(strtime);
    }
    else if (path == '/api/unixtime') {
        dat = getUnixTs(strtime);
    }
    if (dat) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(dat));
    } else {
        res.writeHead(404);
        res.end();
     }
}).listen(puerto);

function getUnixTs(strtime) {
  return {
    unixtime: Date.parse(strtime)
  };  
}

function getTObj(strtime) {
  var date = new Date(Date.parse(strtime));

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}
