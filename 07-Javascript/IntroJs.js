/*
 * JavaScript Básico: Introducción a Variables, Bucles y Funciones
 *
 * Este archivo contiene explicaciones detalladas de algunos conceptos básicos de JavaScript.
 * Los comentarios proporcionan contexto y ejemplos prácticos.
 */

// === 1. VARIABLES ===

/*
 * Las variables son contenedores que almacenan datos.
 * En JavaScript, usamos palabras clave como `var`, `let`, o `const` para declarar variables.
 */

// Declaración de variables
var nombre = "Gabriel"; // `var` es una forma antigua de declarar variables
let edad = 25; // `let` se usa para variables que pueden cambiar
const pais = "Argentina"; // `const` se usa para variables que no cambian

// Imprimir variables en la consola
console.log(nombre); // Muestra "Gabriel"
console.log(edad); // Muestra 25
console.log(pais); // Muestra "Argentina"

// === 2. TIPOS DE DATOS ===

/*
 * JavaScript tiene varios tipos de datos básicos, incluidos:
 * - Strings (cadenas de texto)
 * - Numbers (números)
 * - Booleanos (true o false)
 * - Null (sin valor)
 * - Undefined (valor no asignado)
 * - Object (estructura de datos compleja)
 */

// Ejemplos de tipos de datos
let cadena = "Hola Mundo"; // String
let numero = 100; // Number
let esVerdadero = true; // Booleano
let valorNulo = null; // Null
let indefinido; // Undefined, ya que no se asignó un valor
let objeto = { nombre: "Gabriel", edad: 25 }; // Object

// === 3. OPERADORES ===

/*
 * Los operadores son símbolos que realizan operaciones sobre valores.
 * Algunos operadores básicos son:
 * - + para suma
 * - - para resta
 * - * para multiplicación
 * - / para división
 * - % para módulo (residuo de una división)
 */

// Ejemplos de operadores
let suma = 10 + 5; // 15
let resta = 10 - 5; // 5
let multiplicacion = 10 * 5; // 50
let division = 10 / 5; // 2
let residuo = 10 % 3; // 1

// === 4. ESTRUCTURAS DE CONTROL ===

/*
 * Las estructuras de control permiten dirigir el flujo del programa.
 * Aquí se incluyen `if`, `else`, `switch`, y bucles.
 */

// 4.1 Condicionales: if, else, else if
let numeroEjemplo = 5;
if (numeroEjemplo > 5) {
  console.log("El número es mayor que 5");
} else if (numeroEjemplo === 5) {
  console.log("El número es 5");
} else {
  console.log("El número es menor que 5");
}

// 4.2 Estructura switch
let dia = "lunes";
switch (dia) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "martes":
    console.log("Hoy es martes");
    break;
  default:
    console.log("No es lunes ni martes");
    break;
}

// === 5. BUCLES ===

/*
 * Los bucles permiten ejecutar una porción de código múltiples veces.
 * Los más comunes son `for`, `while`, y `do...while`.
 */

// 5.1 Bucle `for`
for (let i = 0; i < 5; i++) {
  console.log("Iteración con for:", i);
}

// 5.2 Bucle `while`
let contador = 0;
while (contador < 5) {
  console.log("Iteración con while:", contador);
  contador++;
}

// 5.3 Bucle `do...while`
let contador2 = 0;
do {
  console.log("Iteración con do...while:", contador2);
  contador2++;
} while (contador2 < 5);

// === 6. FUNCIONES ===

/*
 * Las funciones son bloques de código reutilizables.
 * Podemos crear funciones usando la palabra clave `function`.
 */

// Declaración de una función simple
function saludar(nombre) {
  return "Hola, " + nombre + "!";
}

// Llamada a la función
console.log(saludar("Gabriel")); // Muestra "Hola, Gabriel!"

// Función de flecha (Arrow function) introducida en ES6
const sumar = (a, b) => a + b;
console.log(sumar(5, 10)); // Muestra 15.

function suma (a, b) {
  return a + b
}


// === 7. ARRAYS ===

/*
 * Los Arrays son estructuras que almacenan múltiples valores.
 * Los elementos están en un orden específico y se accede a ellos mediante índices.
 */

let frutas = ["manzana", "banana", "naranja"];
console.log(frutas[0]); // Muestra "manzana"
frutas.push("uva"); // Añadir elemento al final del array
console.log(frutas.length); // Muestra la longitud del array, en este caso 4

// === 8. OBJETOS ===

/*
 * Los objetos son estructuras de datos complejas que almacenan pares de clave-valor.
 */

let persona = {
  nombre: "Gabriel",
  edad: 25,
  saludar: function () {
    return "Hola, soy " + this.nombre;
  },
};

console.log(persona.saludar()); // Muestra "Hola, soy Gabriel"

// === 9. MANIPULACIÓN DEL DOM ===

/*
 * El DOM (Document Object Model) es la representación estructurada del HTML.
 * Podemos manipular elementos HTML con JavaScript.
 */

// Ejemplo básico (Este código debe ejecutarse en el navegador con un archivo HTML)
// document.getElementById("miElemento").textContent = "Texto modificado";

// === Fin del documento ===