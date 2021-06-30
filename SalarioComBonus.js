var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

const vendedor = {
    nome: valores.shift(),
    salarioFixo: Number(valores.shift()),
    montante: Number(valores.shift()),
    percentualComicao: (15/100)
}

comicao = vendedor.montante * vendedor.percentualComicao
salarioTotal = (vendedor.salarioFixo + comicao).toFixed(2)

console.log("TOTAL = R$ " + salarioTotal)
