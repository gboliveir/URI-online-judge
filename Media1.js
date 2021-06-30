var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

PA = 3.5
PB = 7.5

A = Number(valores.shift()) * PA
B = Number(valores.shift()) * PB

MEDIA = ((A + B)/(PA + PB)).toFixed(5)

console.log("MEDIA = " + MEDIA)