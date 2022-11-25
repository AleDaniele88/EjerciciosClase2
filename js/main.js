//EJERCICIOS CONDICIONALES

// //EJERCICIO A
// let numeroA = parseInt(prompt("Ingrese un número"));
// if(numeroA>1000){
//     alert("El numero es mayor a 1000");
// }

// //EJERCICIO B
// let palabra = prompt("Ingrese una palabra")
// if((palabra == "Hola")||(palabra == "hola")||(palabra == "HOLA")){
//     alert("El saludo es correcto")
// }

// //EJERCICIO C
// let numeroC = parseInt(prompt("Ingrese un número"));
// if((numeroC>10) && (numeroC<50)){
//     alert("El numero se encuentra entre 10 y 50");
// }

//EJERCICIOS CONTROL DE FLUJOS

//EJERCICIO A
let numero = parseInt(prompt("Ingrese un número (0 para salir)"));
let contador = 0;

while(numero != 0){
    contador = contador + numero;
    console.log(contador);
    numero = parseInt(prompt("Ingrese un número (0 para salir)"));
}

console.log("Suma finalizada, el resultado total es " + contador);

//EJERCICIO B
let palabra = prompt("Ingrese una palabra (ESC para terminar)");
let oracion = "";

while(palabra != "ESC"){
    oracion = oracion + " " + palabra;
    console.log(oracion)
    palabra = prompt("Ingrese una palabra (ESC para terminar)");
}

//EJERCICIO C
let repeat = parseInt(prompt("Ingrese un número de repeticiones"))

for(let i = 0; i < repeat; i++){
    console.log("HOLA")
}