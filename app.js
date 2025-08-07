let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Felicidades! Has acertado el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no ha acertado el número secreto
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor que ' + numeroDeUsuario + '.');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor que ' + numeroDeUsuario + '.');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
    

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Todos los números posibles han sido sorteados.');
    }else{
        //Si el numero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); //Llamada recursiva para generar un nuevo número
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica el número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpia la caja de texto
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);

}


condicionesIniciales();
