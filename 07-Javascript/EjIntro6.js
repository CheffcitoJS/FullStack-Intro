// Función para verificar si una palabra es un palíndromo
function esPalindromo(palabra) {
    // Convertimos la palabra a minúsculas para ignorar mayúsculas y minúsculas
    var palabraMinusculas = palabra.toLowerCase();

    // Invertimos la palabra
    var palabraInvertida = "";
    for (var i = palabraMinusculas.length - 1; i >= 0; i--) {
        palabraInvertida += palabraMinusculas[i]; // Agregamos las letras en orden inverso
    }

    // Comparamos la palabra original con la invertida
    return palabraMinusculas === palabraInvertida;
}

// Pedimos al usuario una palabra
var palabraUsuario = prompt("Introduce una palabra para verificar si es un palíndromo:");

// Verificamos si la palabra es un palíndromo
if (esPalindromo(palabraUsuario)) {
    console.log(palabraUsuario + " es un palíndromo.");
} else {
    console.log(palabraUsuario + " no es un palíndromo.");
}






// Función para encontrar los divisores de un número
function encontrarDivisores(numero) {
    // Creamos un arreglo vacío para guardar los divisores
    var divisores = [];

    // Bucle que recorre desde 1 hasta el número menos 1
    for (var i = 1; i < numero; i++) {
        // Si el número es divisible exactamente por 'i'
        if (numero % i === 0) {
            divisores.push(i); // Añadimos 'i' al arreglo de divisores
        }
    }

    // Devolvemos el arreglo con los divisores encontrados
    return divisores;
}

// Función para verificar si un número es perfecto
function esNumeroPerfecto(numero) {
    // Obtenemos los divisores del número con la función anterior
    var divisores = encontrarDivisores(numero);

    // Calculamos la suma de todos los divisores
    var sumaDivisores = 0;
    for (var i = 0; i < divisores.length; i++) {
        sumaDivisores += divisores[i]; // Sumamos cada divisor
    }

    // Comparamos si la suma de los divisores es igual al número
    return sumaDivisores === numero;
}

// Pedimos al usuario un número para verificar si es perfecto
var numeroUsuario = parseInt(prompt("Introduce un número para verificar si es perfecto:"));

// Llamamos a la función para verificar si el número es perfecto
if (esNumeroPerfecto(numeroUsuario)) {
    console.log(numeroUsuario + " es un número perfecto.");
} else {
    console.log(numeroUsuario + " no es un número perfecto.");
}

// Mostramos también los divisores del número
console.log("Sus divisores son:", encontrarDivisores(numeroUsuario));
