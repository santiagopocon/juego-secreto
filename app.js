let numeroSecreto = 0;
let intentos = 0;
let listaNumerosGenerados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarUsuario(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('P',`Has encontrado el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('P','El número es menor');
        } else {
            asignarTextoElemento('P','El número es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja (){
document.querySelector('#valorUsuario').value = '';
return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosGenerados);
    
    //Si ya sorteamos todos los numero
    if (listaNumerosGenerados.length == numeroMaximo){
        asignarTextoElemento('P','Has alcanzado el maximo de números posibles');
    } else{
        // Si el numero generado esta incluido en la lista
        if (listaNumerosGenerados.includes(numeroGenerado)) {
            return generarNumeroSecreto();        
        } else {
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesInciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero secreto
    //Iniciar numero de intentos
    condicionesInciales();
    //Deshabilitar el boton de juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesInciales();