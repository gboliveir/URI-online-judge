var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split(' ');

pi = 3.14159
A = Number(valores.shift())
B = Number(valores.shift())
C = Number(valores.shift())

aTriangulo = ((A * C)/2).toFixed(3)
aCirculo = ( Math.pow(C, 2) * pi).toFixed(3)
aTrapezio = (((A + B)/2) * C).toFixed(3)
aQuadrado = (B * B).toFixed(3)
aRetangulo = (A * B).toFixed(3)

console.log(
    "TRIANGULO: " + aTriangulo + "\n" +
    "CIRCULO: " + aCirculo + "\n" +
    "TRAPEZIO: " + aTrapezio + "\n" +
    "QUADRADO: " + aQuadrado + "\n" +
    "RETANGULO: " + aRetangulo
)
