function adicionarIngrediente(){
    var ing = document.getElementById("ingrediente").value;

    var listahtml = document.getElementById("lista").innerHTML;

    //add lista
    listahtml = listahtml + "<li>"+ing+"</li>";
    document.getElementById("lista").innerHTML = listahtml;
}