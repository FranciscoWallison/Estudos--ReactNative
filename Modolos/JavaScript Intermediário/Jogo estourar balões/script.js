function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    var x = Math.floor(Math.random() * 500);
    var y = Math.floor(Math.random() * 400);

    bola.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
    bola.setAttribute("onClick", "estourar(this)");

    document.body.appendChild(bola);
}

function estourar(element){
    document.body.removeChild(element);
}

function iniciar(){
    setInterval(addBola, 1000);
}