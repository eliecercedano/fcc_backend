var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (error, datos) {
    if (error) {
      return console.error(error)
    }
    datos = datos.toString();
    console.log(datos.length);
    console.log(datos);
  }));
});