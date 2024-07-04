let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elemtoHTML = document.querySelector(elemento);
    elemtoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
     
    
    if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento ('p', 'El numero es menor')
            } else {
                asignarTextoElemento ('p', 'El numero es mayor')
            }
            intentos++;
            limpiarCaja();
        }
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento("p",'Elige un numero de 1 a 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados); 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'ya se sortearon todos los numeros')
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
}

condicionesIniciales();


















/*function hola(Alan) {
    console.log(`hola ${Alan}`);
}
hola("Alan");


function suma(numero) {
    return numero * 2;
}
let numeroPorDos = suma(5);
console.log(numeroPorDos);

function promedio(a, b, c,) {
    return (a + b + c) / 3;
}
let calculoPromedio = promedio(4, 5, 6);
console.log(calculoPromedio);

function encontrarMayor(a, b){
    return a > b ? a : b;
}

let numeroMayor = encontrarMayor(10, 14);
console.log(numeroMayor);

function multificado(number){
    return number * number;
}
let resultado = multificado(84);
console.log(resultado);*/


