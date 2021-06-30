
//Calculo do Raio
var input = require('fs').readFileSync('stdin', 'utf8');

var raio = Number(input)
var n = 3.14159

var area = ((raio*raio) * n).toFixed(4)

console.log("A=" + area)