var module = require ('./module');
var fs = require ("fs");
var dir = process.argv[2];
var ext = process.argv[3];

module (dir, ext, function(err, datos) {
	if (err){
		console.log('Error');
	}else{
		for (var i = 0; i < datos.length; i++){
			console.log(datos[i]);
		}
	}
});