var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n')

horas = valores.shift()
vmedia = valores.shift()
kml = 12

kmRodados = horas * vmedia
consumo = (kmRodados/kml).toFixed(3)

console.log(consumo)
