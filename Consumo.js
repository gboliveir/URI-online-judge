var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var km = parseInt(valores.shift())
var combustivel = Number(valores.shift()).toFixed(1)

consumoMedio = (km/combustivel).toFixed(3)

console.log(consumoMedio + " km/l")

