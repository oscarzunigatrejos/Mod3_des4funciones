const color_a = 'DeepPink';
const color_s = '#FF5733 ';
const color_d = 'SteelBlue';
const color_q = 'DarkViolet';
const color_w = 'SlateGray';
const color_e = 'Maroon';

// Cambia el color del div
function cambiarColor(elemento, color) {
    elemento.style.backgroundColor = color;
}

//Crea los div y le asigna el color
crearBox = (letra, color) => {
    const container = document.querySelector('#boxes');
    const box = document.createElement('div');
    box.id = 'color-' + letra;
    box.textContent = letra;
    container.appendChild(box);
    cambiarColor(box, color);
}

eliminarCaja = (color_id) => {
    const container = document.querySelector('#boxes');
    let elemento = document.getElementById(color_id);
    container.removeChild(elemento);
}
document.addEventListener('keydown', function (event) {

    elemento = document.querySelector('#color-box');
    if (event.key === 'a') {
        cambiarColor(elemento, color_a);
    } else if (event.key === 's') {
        cambiarColor(elemento, color_s);
    } else if (event.key === 'd') {
        cambiarColor(elemento, color_d);
    } else if (event.key === 'q') {
        if (!document.getElementById('color-q')) //si la caja no existe, la crea
            crearBox('q', color_q);
        else {
            eliminarCaja('color-q');  //si la caja  existe, la elimina
        }
    } else if (event.key === 'w') {
        if (!document.getElementById('color-w')) //si la caja no existe, la crea
            crearBox('w', color_w);
        else {
            eliminarCaja('color-w');  //si la caja  existe, la elimina
        }
    } else if (event.key === 'e') {
        if (!document.getElementById('color-e')) //si la caja no existe, la crea
            crearBox('e', color_e);
        else {
            eliminarCaja('color-e');  //si la caja  existe, la elimina
        }
    }
});