var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

PA = 2
PB = 3
PC = 5

A = Number(valores.shift()) * PA
B = Number(valores.shift()) * PB
C = Number(valores.shift()) * PC

MEDIA = ((A + B + C)/(PA + PB + PC)).toFixed(1)

console.log("MEDIA = " + MEDIA)