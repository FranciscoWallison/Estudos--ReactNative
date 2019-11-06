function adicionarInfo(info){
    let novasInfo = {
        ...info,
        status: 0,
        token: 'df5g1h6d5f1g56df1',
        data_cadastro: '17/03/1996' 
    }

    return novasInfo;
}

adicionarInfo({nome: 'Wallison', sobrenome: 'Francisco'});


/*
let info = {
    nome: 'Wallison',
    sobrenome: 'Francisco',
    idade: 99
};

let novaInfor = {
    ...info,
    cidade: "Fortaleza",
    estado: "Ceara",
    pais: "Brasil"
}

console.log(novaInfor);


let numeros = [1,2,3,4];

let outros = [...numeros,5,6,7,8];

console.log(outros);
*/

