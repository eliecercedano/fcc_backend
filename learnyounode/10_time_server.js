var net = require('net');
var puerto = process.argv[2]; 

var server = net.createServer(function (socket){
    var data="";
    var date = new Date();
    var mes = String("00" + date.getMonth()+1).slice(-2);
    var dia = String("00" + date.getDate()).slice(-2);
    var hor = String("00" + date.getHours()).slice(-2);
    var min = String("00" + date.getMinutes()).slice(-2);
    data = date.getFullYear().toString()+"-"+mes.toString()+"-"+dia.toString()+" "+hor.toString()+":"+min.toString()+"\n";  
    //console.log(data);
    socket.end(data);
});
server.listen(puerto);
