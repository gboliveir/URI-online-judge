var input = require('fs').readFileSync('stdin', 'utf8');
var numeros = input.split('\n');

A = parseInt(numeros.shift())
B = parseInt(numeros.shift())

PROD = A * B

console.log("PROD = " + PROD)