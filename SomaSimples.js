var input = require('fs').readFileSync('stdin', 'utf8');
var numeros = input.split('\n');

A = parseInt(numeros.shift())
B = parseInt(numeros.shift())

SOMA = A + B

console.log("SOMA = " + SOMA)
