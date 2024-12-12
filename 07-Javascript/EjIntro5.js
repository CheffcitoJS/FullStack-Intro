/* Ejercicio 1: Contar números pares en un arreglo
Consigna:
Escribe una función llamada contarPares que reciba un arreglo de números como parámetro. La función debe contar cuántos números pares hay en el arreglo y devolver ese número. */

function contarPares(arreglo) {
    var contador = 0; // Variable para guardar la cantidad de pares

    // Recorremos el arreglo con un bucle
    for (var i = 0; i < arreglo.length; i++) {
        var numeroActual = arreglo[i]; // Obtenemos el número actual

        // Comprobamos si el número es par
        if (numeroActual % 2 === 0) {
            contador = contador + 1; // Incrementamos el contador si es par
        }
    }

    // Devolvemos el resultado
    return contador;
}

// Prueba
var numeros = [1, 2, 3, 4, 5, 6];
var resultado = contarPares(numeros);
console.log("Cantidad de números pares:", resultado); // Salida: 3





/* Ejercicio 2: Invertir una cadena
Consigna:
Escribe una función llamada invertirCadena que reciba una cadena como parámetro y devuelva esa misma cadena, pero al revés. */

function invertirCadena(cadena) {
    var cadenaInvertida = ""; // Variable para guardar la cadena invertida

    // Recorremos la cadena desde el último carácter hasta el primero
    for (var i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida = cadenaInvertida + cadena[i]; // Añadimos el carácter al resultado
    }

    // Devolvemos la cadena invertida
    return cadenaInvertida;
}

// Prueba
var texto = "hola";
var resultado = invertirCadena(texto);
console.log("Cadena invertida:", resultado); // Salida: "aloh"




/* Ejercicio 3: Verificar si un número es primo
Consigna:
Escribe una función llamada esPrimo que reciba un número como parámetro. La función debe devolver true si el número es primo o false si no lo es. Un número primo solo es divisible entre 1 y él mismo. */

function esPrimo(numero) {
    if (numero <= 1) {
        return false; // Los números menores o iguales a 1 no son primos
    }

    var esNumeroPrimo = true; // Suponemos que el número es primo

    // Verificamos si tiene divisores distintos de 1 y él mismo
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esNumeroPrimo = false; // Si encontramos un divisor, no es primo
        }
    }

    // Devolvemos el resultado
    return esNumeroPrimo;
}

// Prueba
var resultado = esPrimo(7);
console.log("¿El número es primo?", resultado); // Salida: true



