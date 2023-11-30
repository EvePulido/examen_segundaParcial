let eventos = ['Charla CSS', 'Charla HTML', 'Charla Javascript', 'Charla Python', 'Charla PHP', 'Charla Java', 'Charla C', 'Charla C++', 'Charla Ruby'];
let botones = document.querySelectorAll('.boton');


function showDom(elemento, arr) {
    for (let i=0 ; i < arr.length; i++) {
        document.getElementById(elemento).innerHTML +=
            `<li>${arr[i]}</li>`;
    }
}

showDom ('lista', eventos);

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonSeleccionado = boton.textContent;
        if (botonSeleccionado === "Crear") {
            let input = document.querySelector('#evento').value;
            eventos.unshift(input);
            limpiarPantalla();
            showDom ('lista', eventos);
        } else {
            eventos.pop();
            limpiarPantalla();
            showDom ('lista', eventos);
        }
    });
});

function limpiarPantalla() {
    document.querySelector('#lista').innerHTML = '';
}
