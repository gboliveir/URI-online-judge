var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

atrP1 = valores[0].split(' ')
atrP2 = valores[1].split(' ')

const p1 = {
    x1: Number(atrP1.shift()),
    y1: Number(atrP1.shift())
}

const p2 = {
    x2: Number(atrP2.shift()),
    y2: Number(atrP2.shift())
}

distancia =  Math.sqrt(Math.pow((p2.x2 - p1.x1), 2) + Math.pow((p2.y2 - p1.y1), 2)).toFixed(4)

console.log(distancia)

