var resultado = 0, 
n = process.argv.length;
for (var i=2; i<n; i++) {
  resultado += Number(process.argv[i]);
}
console.log(resultado);
