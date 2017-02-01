var fs = require('fs');
var archivo   = require('archivo');
var carpeta   = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(carpeta, function (err, archivos) {
  if (err) 
  	return console.error(err);
  archivos.forEach(function (a) {
    if (archivo.extname(a) === extension) {
      console.log(a);
    }
  });
});