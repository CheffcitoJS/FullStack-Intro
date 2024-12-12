//Ejercicio 1: Declaración de Variables y Tipos de Datos
// 1. Declara una variable llamada `nombre` que almacene tu nombre como una cadena de texto (string).
// 2. Declara una variable llamada `edad` que almacene tu edad como un número.
// 3. Declara una variable llamada `esEstudiante` que almacene un valor booleano indicando si eres estudiante (true o false).
// 4. Usa `console.log()` para imprimir un mensaje que combine las variables anteriores en el siguiente formato:
//    "Mi nombre es [nombre], tengo [edad] años y soy estudiante: [esEstudiante]".

let nombre = "Ana";
let edad = 20;
let esEstudiante = true;

console.log(`Mi nombre es ${nombre}, tengo ${edad} años y soy estudiante: ${esEstudiante}`);


//Ejercicio 2: Operadores y Condicionales
// 1. Declara dos variables llamadas `numero1` y `numero2` con valores numéricos diferentes.
// 2. Crea una condición `if` que compare ambos números e imprima en consola cuál es el mayor, o si son iguales.
// 3. Usa operadores como `>`, `<`, y `===` para realizar la comparación.

let numero1 = 15;
let numero2 = 10;

if (numero1 > numero2) {
    console.log(`${numero1} es mayor que ${numero2}`);
} else if (numero1 < numero2) {
    console.log(`${numero2} es mayor que ${numero1}`);
} else {
    console.log(`${numero1} y ${numero2} son iguales`);
}


//Ejercicio 3: Bucles for
// 1. Usa un bucle `for` para imprimir los números del 1 al 10 en la consola.
// 2. En cada iteración, imprime el número actual usando `console.log()`.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//Ejercicio 4: Funciones
// 1. Escribe una función llamada `saludar` que tome un parámetro `nombre`.
// 2. La función debe devolver un mensaje de saludo en el siguiente formato: "Hola, [nombre]!".
// 3. Llama a la función con un nombre de ejemplo y muestra el resultado en la consola.

function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar("Ana"));


//Practica: Arrays y Bucles
// 1. Declara un array llamado `frutas` que contenga algunas frutas como "manzana", "banana" y "naranja".
// 2. Usa un bucle `for` para recorrer el array e imprimir cada fruta en la consola.

let frutas = ["manzana", "banana", "naranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


//Ejercicio 6: Objetos
// 1. Crea un objeto llamado `persona` con las siguientes propiedades: nombre (string), edad (number), y esEstudiante (boolean).
// 2. Accede a cada propiedad del objeto y muéstrala en la consola.

let persona = {
    nombre: "Ana",
    edad: 20,
    esEstudiante: true
};

console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Es estudiante: ${persona.esEstudiante}`);


//Ejercicio 7: Condicional switch
// 1. Declara una variable llamada `dia` con un número entre 1 y 7, donde 1 representa "Lunes" y 7 representa "Domingo".
// 2. Usa una declaración `switch` para imprimir el día de la semana correspondiente.

let dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Número de día no válido");
}


//Ejercicio 8: Función con Condicionales
// 1. Escribe una función llamada `calcularDescuento` que tome como parámetros el precio original y un porcentaje de descuento.
// 2. La función debe devolver el precio final después de aplicar el descuento.
// 3. Usa un condicional para asegurarte de que el porcentaje de descuento está entre 0 y 100.

function calcularDescuento(precio, descuento) {
    if (descuento < 0 || descuento > 100) {
        return "Porcentaje de descuento no válido";
    }
    return precio - (precio * (descuento / 100));
}

console.log(calcularDescuento(100, 20));  // Resultado esperado: 80


//Ejercicio 9: Función Recursiva
// 1. Escribe una función llamada `factorial` que tome un número como parámetro.
// 2. La función debe devolver el factorial del número usando recursión.
//    (El factorial de un número n es el producto de todos los enteros positivos menores o iguales a n.)

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));  // Resultado esperado: 120


//Ejercicio 10: Métodos de Array
// 1. Declara un array llamado `numeros` con algunos números, por ejemplo: [1, 2, 3, 4, 5].
// 2. Usa el método `map()` para crear un nuevo array que contenga el doble de cada número del array original.
// 3. Usa el método `filter()` para crear un nuevo array que solo contenga los números pares.

let numeros = [1, 2, 3, 4, 5];

let dobles = numeros.map(numero => numero * 2);
console.log(dobles);  // Resultado esperado: [2, 4, 6, 8, 10]

let pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);  // Resultado esperado: [2, 4]
