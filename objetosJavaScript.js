'use strict'

/*ejercicio 1 Solicitar una cadena de texto desde teclado, presentar el 
número de caracteres que contiene y presentar la propia cadena en 
cursiva, en negrita y en tachado.*/

function frase(texto = prompt('prueba a introducir algo')) {
    console.log(texto.length);
    console.log(texto.bold());
    console.log(texto.italics());
    console.log(texto.strike());
}


/* Ejercicio 2 Ingresar una serie de nombres por teclado hasta que se 
cargue la palabra Fin, y mostrar cuántos nombres se ingresaron.*/

function arrayCadena(nombre = prompt('Introduce el nombre que quieras:')) {
    let arrayNombres = [];
    arrayNombres.push(nombre);
    while (nombre != 'FIN') {
        nombre = prompt('Introduce más nombres o finaliza escribiendo FIN');
        arrayNombres.push(nombre);
    }
    console.log(arrayNombres);
}

/*Ejercicio 3 Igual al anterior, pero que termine la aplicación sin 
contemplar mayúsculas ni minúsculas. Es decir que para salir se pueda 
teclear fin, Fin o FIN.*/

function arrayCadena(nombre = prompt('Introduce el nombre que quieras:')) {
    let arrayNombres = [];
    arrayNombres.push(nombre);
    while (nombre != 'FIN' && nombre != 'fin' && nombre != 'Fin') {
        nombre = prompt('Introduce más nombres o finaliza escribiendo FIN');
        arrayNombres.push(nombre);
    }
    console.log(arrayNombres);
}


/* Ejercicio 4 Realizar la búsqueda de un string clave en un string fuente. Se 
deberá ingresar una frase o texto (fuente) y luego la clave a buscar. 
En caso de encontrarla, imprimir la posición, de lo contrario una 
leyenda.*/

function encontrarString(caracter, texto = prompt('Esta será tu cadena fuente')) {
    console.log(texto.indexOf(caracter));
}

/* Ejercicio 5 Ingresar una palabra o texto por teclado y determinar 
si es o no una palabra palíndromo. (Palabra que se lee de igual 
manera de adelante hacia atrás, que de atrás hacia delante)*/

function palindromo(palabra = prompt('Deberias ingresar una palabra')) {
    let arrayAnverso = [];
    let palindromo = [];
    let contadorInverso = palabra.length - 1;
    let indice = 0;
    for (let i = 0; i < palabra.length; i++) {
        arrayAnverso.push(palabra[i]);
    }
    while (arrayAnverso[indice] == arrayAnverso[contadorInverso - indice]) {
        palindromo.push(arrayAnverso[indice]);
        indice++;
        if (indice == arrayAnverso.length) {
            break
        }
    }
    if (palindromo.length == arrayAnverso.length) {
        console.log('Es palindromo');
    } else {
        console.log('No es un palíndromo');
    }
}

/*Ejercicio 6 Realizar un programa que permita cargar una dirección de 
mail e implementar una función que verifique si el String tiene cargado 
el carácter @. */

function arrobaneitor(mail) {
    if (mail.includes('@')) {
        console.log('Right');
    }
    else {
        console.log('Pon una "@" anda. Ya te vale');
    }
}

/*Ejercicio 7 Cargar un String por teclado e implementar las siguientes 
funciones:
a) Imprimir la primera mitad de los caracteres de la cadena.
b) Imprimir el último carácter.
c) Imprimirlo en forma inversa.
d) Imprimir cada carácter del String separado con un guión.
e) Imprimir la cantidad de vocales almacenadas.*/

//Apartado a
//en caso de que los caracteres sean impares redondea hacia arriba
function mitadString(texto = prompt('Con la mitad basta')) {
    let array = []
    for (let i = 0; i < (texto.length) / 2; i++) {
        array[i] = texto[i];
        console.log(array[i]);
    }
}

//Apartado b
function ultimoCaracter(texto = prompt('Solo entiendo lo último que pones')) {
    console.log(texto[texto.length - 1]);
    console.log('Ves?');
}

//Apartado c
function cadenaInversa(texto = prompt('Como leer en un espejo')) {
    let contadorInverso = texto.length - 1;
    let resultado = ''; //el string funciona como array
    for (let i = 0; i < texto.length; i++) {
        //arrayInverso[contadorInverso - i] = texto[i];
        resultado += texto[contadorInverso - i];
    }
    console.log(resultado);
}
//Apartado d
function caracterGuion(texto = prompt('Más vale tener espacio. Ecribe algo y verás')) {
    let arrayTexto = [];
    let resultado = [];
    for (let i = 0; i < texto.length; i++) {
        arrayTexto[i] = texto[i] + '-';
    }
    //se elimina el guion de la ultima letra
    arrayTexto[arrayTexto.length - 1] = texto[texto.length - 1];
    //se crea la cadena
    for (let element of arrayTexto) {
        resultado = resultado + element;
    }
    console.log(resultado);
}

//Apartado e
function buscaVocales(texto = prompt('A ver cuantas vocales encuentras')) {
    let vocales = texto.match(/[aeiou]/gi).length;
    //usar indexOf() para encontrar vocales
    console.log(vocales);
}

/*Ejercicio 8 Codifique un programa que permita cargar una oración por 
teclado, luego mostrar cada palabra ingresada en una línea distinta.*/