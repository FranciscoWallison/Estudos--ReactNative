function trocarDive(nome, idade){
    var area = document.getElementById("area");
    var texto = prompt("Qual seu nome?");

    area.innerHTML = nome+" "+texto+ " tem "+idade+" anos";
}