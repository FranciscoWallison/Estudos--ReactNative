function somar(atual, x){
    return atual + x;
}

function adicionar(...numeros){
    //soma todo mundo função aônima
    let total = numeros.reduce((atual, x)=> atual + x);
    console.log(total)
}

adicionar(1,2,3,4,5,6)

/*function somar(atual, x){
    return atual + x;
}

function adicionar(...numeros){
    //soma todo mundo função aônima
    let total = numeros.reduce((atual, x)=>{
        return atual + x;
    });
    console.log(total)
}

adicionar(1,2,3,4,5,6)*/

/*function somar(atual, x){
    return atual + x;
}

function adicionar(...numeros){
    //soma todo mundo função aônima
    let total = numeros.reduce(function(atual, x){
        return atual + x;
    });
    console.log(total)
}

adicionar(1,2,3,4,5,6)*/

/*function somar(atual, x){
    return atual + x;
}

function adicionar(...numeros){
    //soma todo mundo
    let total = numeros.reduce(somar);
    console.log(total)
}

adicionar(1,2,3,4,5,6)*/