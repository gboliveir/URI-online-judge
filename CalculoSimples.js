var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

atrPeca1 = valores[0].split(" ")
atrPeca2 = valores[1].split(" ")

const Peca1 = {
    cod: Number(atrPeca1.shift()),
    qt: Number(atrPeca1.shift()),
    VUnit: Number(atrPeca1.shift()),
}

const Peca2 = {
    cod: Number(atrPeca2.shift()),
    qt: Number(atrPeca2.shift()),
    VUnit: Number(atrPeca2.shift()),
}

totalP1 = Peca1.qt * Peca1.VUnit
totalP2 = Peca2.qt * Peca2.VUnit

TOTAL = (totalP1 + totalP2).toFixed(2)

console.log("VALOR A PAGAR: R$ " + TOTAL)
