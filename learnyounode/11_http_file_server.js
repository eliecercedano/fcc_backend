var remember = [];
var n = 0;

var http = require('http');
var arrurl = [process.argv[2], process.argv[3], process.argv[4]]; 
    for(var i in arrurl){     
        HttpProcess(i, arrurl[i]);
    }

    function HttpProcess(count, url){
        http.get(url, function(res){
            res.setEncoding('utf8');                            

            var string = '';
            res.on('data', function(data){
                string += data;
            });

            res.on('end', function(){
                remember[count] = string;
                n ++;
                if(n >= 3){
                    for(var i in remember){
                        console.log(remember[i]); 
                    }

                }
            });

        }).on('error', function(e) {
          console.log("Error: " + e.message);
        }); 
    }