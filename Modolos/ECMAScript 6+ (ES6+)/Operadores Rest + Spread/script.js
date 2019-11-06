function adicionar(nomes, ...novosNomes){
    //gera um unico array
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];

    return novoConjunto;
}

let nomes = ["Wallison", "Francisco"];

let outros =  adicionar(nomes, "Ana", "Ingrid", "Maria");

console.log(outros);