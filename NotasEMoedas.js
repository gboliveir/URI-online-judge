var input = require('fs').readFileSync('stdin', 'utf8');

const valores = input.split(".")

reais = parseInt(valores.shift()) 
centavos = parseInt(valores.shift())

var r100 = 0;
var r20 = 0;
var r50 = 0;
var r10 = 0;
var r5 = 0;
var r2 = 0;

var m1 = 0;
var m50 = 0;
var m25 = 0;
var m10 = 0;
var m05 = 0;
var m01 = 0;


function calcular(reais, centavos) {

    if(reais >= 100){
        r100++;
        return calcular(reais - 100, centavos);
    }else if( reais >= 50) {
        r50++;
        return calcular(reais - 50, centavos);
    }else if( reais >= 20) {
        r20++;
        return calcular(reais - 20, centavos);
    }else if( reais >= 10) {
        r10++;
        return calcular(reais - 10, centavos);
    }else if( reais >= 5) {
        r5++;
        return calcular(reais - 5), centavos;
    }else if( reais >= 2) {
        r2++;
        return calcular(reais - 2, centavos);
    }else if(reais === 1){
        m1 = reais;
        reais = 0;
        return calcular(reais, centavos);
    }else if( centavos >= 50) {
        m50++;
        return calcular(reais, centavos - 50);
    }else if( centavos >= 25) {
        m25++;
        return calcular(reais, centavos - 25);
    }else if( centavos >= 10) {
        m10++;
        return calcular(reais, centavos - 10);
    }else if( centavos >= 5) {
        m05++;
        return calcular(reais, centavos - 5);
    }else if( centavos >= 1) {
        m01++;
        return calcular(reais, centavos - 1);
    }
}

calcular(reais, centavos)

console.log(
    "NOTAS:" + "\n" +
    r100 + "nota(s) de R$ 100.00" + "\n" +
    r50 + "nota(s) de R$ 50.00" + "\n" +
    r20 + "nota(s) de R$ 20.00" + "\n" +
    r10 + "nota(s) de R$ 10.00" + "\n" +
    r5 + "nota(s) de R$ 5.00" + "\n" +
    r2 + "nota(s) de R$ 2.00" + "\n"
);

console.log(
    "MOEDAS:" + "\n" +
    m1 + "nota(s) de R$ 100.00" + "\n" +
    m50 + "nota(s) de R$ 50.00" + "\n" +
    m25 + "nota(s) de R$ 20.00" + "\n" +
    m10 + "nota(s) de R$ 10.00" + "\n" +
    m05 + "nota(s) de R$ 5.00" + "\n" +
    m01 + "nota(s) de R$ 2.00" + "\n"
);
