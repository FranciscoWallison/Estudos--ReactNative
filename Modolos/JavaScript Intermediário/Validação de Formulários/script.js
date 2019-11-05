function validar(){
    var valor = document.getElementById("numero").value;

    if(valor.length > 2 ){
        alert("Numero com mais de dois algaritimos");
        return false;
    } else {
        return true;
    }
}