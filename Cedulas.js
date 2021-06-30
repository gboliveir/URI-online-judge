var input = require('fs').readFileSync('stdin', 'utf8');

var valor = parseInt(input);
qt100 = 0;
qt50 = 0;
qt20 = 0;
qt10 = 0;
qt5 = 0;
qt2 = 0;
qt1 = 0;

function getCedulas(input) {
    while(input > 0){
        if(input >= 100){
            qt100++;
            return getCedulas(input - 100);
        } else if(input >= 50) {
            qt50++;
            return getCedulas(input - 50);
        } else if(input >= 20) {
            qt20++;
            return getCedulas(input - 20);
        } else if(input >= 10) {
            qt10++;
            return getCedulas(input - 10);
        } else if(input >= 5) {
            qt5++;
            return getCedulas(input - 5);
        } else if(input >= 2) {
            qt2++;
            return getCedulas(input - 2);
        } else if(input >= 1) {
            qt1++;
            return getCedulas(input - 1);
        }
    }
}

getCedulas(input);

console.log(
    valor + "\n" +
    qt100 + " nota(s) de R$ 100,00" + "\n" +
    qt50 + " nota(s) de R$ 50,00" + "\n" +
    qt20 + " nota(s) de R$ 20,00" + "\n" +
    qt10 + " nota(s) de R$ 10,00" + "\n" +
    qt5 + " nota(s) de R$ 5,00" + "\n" +
    qt2 + " nota(s) de R$ 2,00" + "\n" +
    qt1 + " nota(s) de R$ 1,00"
);