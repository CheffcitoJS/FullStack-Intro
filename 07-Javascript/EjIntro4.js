// Ejercicio 1: Contar vocales en una cadena
// Consigna:
// Crea una función llamada contarVocales que reciba una cadena como parámetro. 
// La función debe contar cuántas vocales (a, e, i, o, u) hay en la cadena 
// y devolver ese número.

function contarVocales(cadena) {
    // Lista de vocales (considerando mayúsculas y minúsculas)
    var vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var contador = 0; // Contador de vocales encontrado

    // Recorrer cada carácter de la cadena
    for (var i = 0; i < cadena.length; i++) {
        var caracterActual = cadena[i]; // Tomar el carácter actual de la cadena
        var esVocal = false; // Suponemos que no es vocal al inicio

        // Comparar el carácter actual con cada vocal
        for (var j = 0; j < vocales.length; j++) {
            if (caracterActual === vocales[j]) {
                esVocal = true; // Si coincide, es una vocal
            }
        }

        // Si encontramos que es vocal, sumamos al contador
        if (esVocal === true) {
            contador = contador + 1; // Incrementamos el contador
        }
    }

    // Devolver la cantidad de vocales encontradas
    return contador;
}

// Prueba
var resultado = contarVocales("Hola, ¿Cómo estás?");
console.log("Número de vocales:", resultado); // Salida: 7





// Ejercicio 2: Encontrar el número mayor y menor en un arreglo
// Consigna:
// Crea una función llamada mayorYMenor que reciba un arreglo de números. 
// La función debe devolver un objeto con dos propiedades: mayor y menor.

function mayorYMenor(arreglo) {
    var mayor = 0; // Inicializamos la variable mayor
    var menor = 0; // Inicializamos la variable menor

    // Aseguramos que el arreglo no esté vacío
    if (arreglo.length > 0) {
        mayor = arreglo[0]; // Tomamos el primer número como referencia
        menor = arreglo[0]; // Tomamos el primer número como referencia

        // Recorremos el arreglo desde el inicio
        for (var i = 0; i < arreglo.length; i++) {
            var numeroActual = arreglo[i]; // Tomamos el número actual del arreglo

            if (numeroActual > mayor) {
                mayor = numeroActual; // Actualizamos el mayor
            }

            if (numeroActual < menor) {
                menor = numeroActual; // Actualizamos el menor
            }
        }
    }

    // Creamos un objeto para guardar el resultado
    var resultado = {};
    resultado.mayor = mayor;
    resultado.menor = menor;

    // Devolvemos el objeto resultado
    return resultado;
}

// Prueba
var numeros = [3, 7, 2, 9, 1, 6];
var resultado = mayorYMenor(numeros);
console.log("Número mayor:", resultado.mayor); // Salida: 9
console.log("Número menor:", resultado.menor); // Salida: 1







// Ejercicio 3: Generar un patrón de asteriscos
// Consigna:
// Escribe una función llamada generarPatron que reciba un número entero n. 
// La función debe imprimir un patrón de asteriscos en forma de triángulo.

function generarPatron(n) {
    // Verificamos que el número sea mayor a 0
    if (n > 0) {
        // Creamos un bucle que recorre cada fila del triángulo
        for (var i = 1; i <= n; i++) {
            var linea = ""; // Variable para guardar la línea de asteriscos

            // Creamos otro bucle para añadir los asteriscos
            for (var j = 1; j <= i; j++) {
                linea = linea + "*"; // Añadimos un asterisco a la línea
            }

            // Imprimimos la línea completa
            console.log(linea);
        }
    } else {
        // Si el número no es válido, mostramos un mensaje
        console.log("Por favor, ingresa un número mayor a 0.");
    }
}

// Prueba
generarPatron(5);
// Salida:
// *
// **
// ***
// ****
// *****

