const ele = document.getElementById("ele1")

function pintar(elemento, color = 'green'){
    elemento.style.backgroundColor = color;
}

ele.addEventListener("click", function(){
    pintar(ele, 'yellow');
} );
    
pintar(ele); //para colocar el color por defecto