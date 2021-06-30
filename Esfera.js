var input = require('fs').readFileSync('stdin', 'utf8');

raio = Number(input)

pi = 3.14159
volume = ((4/3.0) * pi * Math.pow(raio, 3)).toFixed(3)

console.log("VOLUME = " + volume)
