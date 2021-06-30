var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

const trabalhador = {
    id: Number(valores.shift()),
    horasTrabalhadas: Number(valores.shift()),
    valorDaHoraTrabalhada: Number(valores.shift()),
} 

SALARY = (trabalhador.horasTrabalhadas * trabalhador.valorDaHoraTrabalhada).toFixed(2)
 
console.log("NUMBER = " + trabalhador.id + "\n" + "SALARY = U$ " + SALARY)