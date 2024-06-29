function cambiaColor(elemento, color) {
    elemento.style.backgroundColor = color;
}

elemento1 = document.querySelector('#color-1');
elemento2 = document.querySelector('#color-2');
elemento3 = document.querySelector('#color-3');
elemento4 = document.querySelector('#color-4');

elemento1.addEventListener('click', function() {
    cambiaColor(elemento1,'black');
});
elemento2.addEventListener('click', function() {
    cambiaColor(elemento2,'black');
});
elemento3.addEventListener('click', function() {
    cambiaColor(elemento3,'black');
});
elemento4.addEventListener('click', function() {
    cambiaColor(elemento4,'black');
});
