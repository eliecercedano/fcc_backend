var fs = require('fs')
var archivo = process.argv[2];
fs.readFile(archivo, function (err, archivo) {
  if (err) {
    return console.log(err);
  }
  var lineas = archivo.toString().split('\n').length - 1;
  console.log(lineas);
});