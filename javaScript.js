'use strict';

//Ejercio 1
//alert('Hello world');

//Ejercicio 2
//document.write('<h1>Hello world</h1>');

//Ejercicio 3
///document.write('<h1>'+(3+5)+'</h1>');

//ejercicio 4 El usuario puede introducir texto vacío, espacio en blanco, o números
/*let nombreUsusario=prompt('Cual es tu nombre forastero?');
document.write('<h1>Hola '+nombreUsuario+' </h1>');*/

//Ejercicio 5 El usuario puede introducir texto vacío o espacio en blanco
/*let numero1=prompt('Rápido, piensa en un número');
let numero2=prompt('Ahora di otro');
document.write('<h1>'+(numero1+numero2)+' ¿Puedes sumar así de rápido?</h1>');*/

//Ejercicio 6 El usuario puede comparar dos numeros
/*let numMayorMenor1 = prompt('Pásame una cifra. Si no pones nada contarán como 0');
let num1 = Number(numMayorMenor1);
while (!(num1 <= 0 || num1 >= 0)) {
    alert('Una cifra es un número');
    num1 = Number(prompt('Inténtalo otra vez. Pásame una cifra'));
}

let numMayorMenor2 = prompt('Y otro número más');
let num2 = Number(numMayorMenor2);
while (!(num2 <= 0 || num2 >= 0)) {
    alert('Ya has hecho esto antes');
    numMayorMenor2 = prompt('Inténtalo otra vez.Pásame una cifra');
    num2 = Number(numMayorMenor2);
}

if (num1 < num2) {
    document.write('<h1> ' + num2 + ' es mayor</h1>');
} else if (num1 > num2) {
    document.write('<h1> ' + num1 + ' es mayor</h1>');
} else {
    document.write('<h1>Ambos son iguales</h1>');
}*/

//Ejercicio 7
/*
let numMayorMenor1 = prompt('Pásame una cifra. Si no pones nada contarán como 0');
let num1 = Number(numMayorMenor1);
while (!(num1 <= 0 || num1 >= 0)) {
    alert('Una cifra es un número');
    num1 = Number(prompt('Inténtalo otra vez. Pásame una cifra'));
}

let numMayorMenor2 = prompt('Y otro número más');
let num2 = Number(numMayorMenor2);
while (!(num2 <= 0 || num2 >= 0)) {
    alert('Ya has hecho esto antes');
    numMayorMenor2 = prompt('Inténtalo otra vez.Pásame una cifra');
    num2 = Number(numMayorMenor2);
}

let mayor;//almacena el mayor entre num1 y num2

if (num1 < num2) {
    mayor=num2;
} else if (num1 > num2) {
    mayor=num1;
} else {
    mayor=num1;
}

console.log(mayor);

let numMayorMenor3 = prompt('Más difícil aun. Da otro número más');
let num3 = Number(numMayorMenor3);
while (!(num3 <= 0 || num3 >= 0)) {
    alert('Seguro que te despistaste');
    numMayorMenor3 = prompt('Inténtalo de nuevo');
    num3 = Number(numMayorMenor3);
}

if (mayor < num3) {
    document.write('<h1> ' + num3 + ' es mayor</h1>');
} else if (mayor > num3) {
    document.write('<h1> ' + mayor + ' es mayor</h1>');
} else {
    document.write('<h1>Ambos son iguales</h1>');
}*/

//Ejercicio 8 comprueba si un número es divisible entre 2
/*
let numeroSolicitado = prompt('Pon un número y veamos si es par. Y ya sabes déjalo vacío y contará como 0');
let num = Number(numeroSolicitado);
if (num >= 0 || num <= 0) {


    if (num % 2 == 0) {
        document.write('<h1> ' + num + ' es divisible entre 2</h1>');
    } else {
        document.write('<h1> ' + num + ' no es divisible entre 2</h1>');
    }
}else{
    document.write('<h1>Eso no es divisible entre nada</h1>');
}
*/

//Ejercicio 9 cuenta las veces que aparece 'a' en una frase
/*
let frase = prompt('¿Qué te cuentas?');
let filtro = /a/gi; //la "g" indica que la búsqueda es global y la "i" que ignora que las mayúsculas y minúsculas cuentan igual
let arrayElementos = frase.match(filtro);
document.write('<h1>¿Sabes que tu frase contiene ' + arrayElementos.length + ' "a"?</h1>');
document.write('<h2>Cuenta si no me crees</h2>');
*/

//Ejercicio 10 Devuelve las vocales que hay en una frase (no su número)
/*
let frase = prompt('Dame frase que habiendo frase hay vocal');
for (let index = 0; index < frase.length; index++) {
    if (frase[index] == 'a' || frase[index] == 'e' || frase[index] == 'i' || frase[index] == 'o' || frase[index] == 'u') {
        document.write('<b>' + frase[index] + ' </b>');
    }
}*/

//Ejercicio 11 recibe una frase y devuelve el número total de vocales que contiene
/*
let frase = prompt('Dame frase que habiendo frase hay vocal');
let arrayVocales=[]; //Hay que asignar los corchetes para indicar que es un array antes de usarlo o dara error de indefinido
let vocales;
for (let index = 0; index < frase.length; index++) {
    if (frase[index].match(/a/gi) || frase[index].match(/e/gi) || frase[index].match(/i/gi) || frase[index].match(/o/gi) || frase[index].match(/u/gi)) {
        vocales = frase[index];
        arrayVocales.push(vocales);
    }
}
console.log(arrayVocales.length);
*/

//Ejercicio 12 Escribe las vocales que salen ya sean mayúsculas o minúculas
/*
let frase = prompt('¿Qué te cuentas?'); //Recibe la frase del usuario

alert('Veamos cuantas vocales tiene tu frase');

let filtro = /a/gi; //indica la letra a seleccionar
let arrayElementos = frase.match(filtro); //guarda la letra seleccionada en un array
document.write('<h1>Tu frase contiene ' + arrayElementos.length + ' "a o A"</h1>');

filtro = /e/gi;
arrayElementos = frase.match(filtro);
document.write('<h1>'+ arrayElementos.length + ' "e o E"</h1>');

filtro = /i/gi;
arrayElementos = frase.match(filtro);
document.write('<h1>'+ arrayElementos.length + ' "i o I"</h1>');

filtro = /o/gi;
arrayElementos = frase.match(filtro);
document.write('<h1>'+ arrayElementos.length + ' "o u O"</h1>');

filtro = /u/gi;
arrayElementos = frase.match(filtro);
document.write('<h1>'+ arrayElementos.length + ' "u o U"</h1>');*/


