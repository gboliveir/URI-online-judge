var input = require('fs').readFileSync('stdin', 'utf8');

var anos = 0, meses = 0, dias = parseInt(input);

function configurarIdade(dias){

    if(dias >= 365){
        anos+=1;
        dias -= 365;
        return configurarIdade(dias);
    } else if (dias >= 30){
        meses++;
        dias -= 30;
        return configurarIdade(dias);
    }else{
        return `${anos} ano(s)\n${meses} mes(es)\n${dias} dia(s)`;
    }
}

console.log(configurarIdade(dias));

