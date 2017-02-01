var fs = require('fs')
var archivo = process.argv[2];
var contenido = fs.readFileSync(archivo)
var lineas = contenido.toString().split('\n').length - 1
console.log(lineas)