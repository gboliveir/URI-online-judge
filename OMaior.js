var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split(' ');

num1 = parseInt(valores.shift())
num2 = parseInt(valores.shift())
num3 = parseInt(valores.shift())

maior = (num1 + num2 + num1 * num2 * (num1 - num2))/2

console.log(maior)

console.log(num1)
console.log(num2)
console.log(num3)
