var input = require('fs').readFileSync('stdin', 'utf8');

const segundos = parseInt(input);



function horasConfiguradas(segundos){
    let h = 0, m = 0, s = segundos;

    while(s >= 60){
        m++;
        s -= 60;

        if(m >= 60){
            h++;
            m -= 60;
        }
    }

    return `${h}:${m}:${s}`;
}

console.log(horasConfiguradas(segundos))

