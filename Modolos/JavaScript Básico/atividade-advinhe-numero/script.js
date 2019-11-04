function verificar(){
    var n1 = document.getElementById("n1").innerHTML;
    var n2 = document.getElementById("n2").value;

    if(n1 == n2){
        alert("Acerto miseravi");
    }else{
        alert("Erouuuuuu")
    }
    restart();
} 

function restart(){
    document.getElementById("n2").value = "";

    //Math.floor() Math.random()
    var r = Math.floor(Math.random() *100) ;
    document.getElementById("n1").innerHTML = r;
}