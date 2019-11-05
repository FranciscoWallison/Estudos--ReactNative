function apertouTecla(event){
    console.log("Apertou alguma tecla: " + event.keyCode)
}

function clicoNaTecla(event){
    if(event.shiftKey == true){
        console.log("Apertou alguma tecla com shift...")
    }else{
        console.log("Clico alguma tecla: " + event.keyCode)
    }

}

function segurarTeclado(event){
    console.log("Seguro alguma tecla: " + event.keyCode)
}


