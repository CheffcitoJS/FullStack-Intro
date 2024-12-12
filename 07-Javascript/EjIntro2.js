// Ejercicio 1: Manejo de Cadenas de Texto y Métodos
// 1. Declara una variable llamada `frase` que contenga una oración con más de una palabra.
// 2. Usa los métodos `toUpperCase()`, `toLowerCase()`, `split()`, y `substring()` para manipular la cadena.
// 3. Imprime en consola:
//    - La frase en mayúsculas.
//    - La frase en minúsculas.
//    - La primera palabra de la frase.
//    - Un substring de la frase que contenga los primeros 5 caracteres.

let frase = "JavaScript es un lenguaje increíble";

console.log(frase.toUpperCase());           // "JAVASCRIPT ES UN LENGUAJE INCREÍBLE"
console.log(frase.toLowerCase());           // "javascript es un lenguaje increíble"
console.log(frase.split(" ")[0]);           // "JavaScript"
console.log(frase.substring(0, 5));        // "JavaS"


// Ejercicio 2: Manejo de Objetos y Métodos
// 1. Crea un objeto `libro` con las propiedades: `titulo`, `autor`, `ano` y `genero`.
// 2. Agrega un método al objeto `libro` llamado `descripcion` que retorne una cadena con la siguiente estructura:
//    "El libro [titulo] fue escrito por [autor] en el año [ano] y pertenece al género [genero]."
// 3. Llama al método `descripcion` y muestra el resultado en la consola.

let libro = {
    titulo: "El código secreto",
    autor: "José García",
    ano: 2020,
    genero: "Ficción",
    descripcion: function() {
        return `El libro ${this.titulo} fue escrito por ${this.autor} en el año ${this.ano} y pertenece al género ${this.genero}.`;
    }
};

console.log(libro.descripcion());


// Ejercicio 3: Funciones con Parámetros y Condicionales
// 1. Escribe una función llamada `esPar` que reciba un número como parámetro y devuelva `true` si el número es par y `false` si es impar.
// 2. Luego, crea una función llamada `contarPares` que reciba un array de números y retorne el total de números pares en el array.
// 3. Usa `esPar` dentro de `contarPares` para realizar la verificación.

function esPar(num) {
    return num % 2 === 0;
}

function contarPares(array) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (esPar(array[i])) {
            contador++;
        }
    }
    return contador;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(contarPares(numeros));  // Resultado esperado: 4





// Ejercicio 4: Manipulación de Arrays y Funciones
// 1. Declara un array de objetos llamado `productos` donde cada objeto tenga las propiedades: `nombre`, `precio` y `categoria`.
// 2. Crea una función llamada `productosPorCategoria` que reciba una categoría como parámetro y devuelva un nuevo array con todos los productos de esa categoría.
// 3. Imprime en consola los productos de una categoría específica.

//Resultado
// 1. Se declara un array llamado `productos` que contiene varios objetos.
// Cada objeto representa un producto con tres propiedades: `nombre`, `precio` y `categoria`.
let productos = [
    { nombre: "Camiseta", precio: 20, categoria: "Ropa" },
    { nombre: "Pantalón", precio: 40, categoria: "Ropa" },
    { nombre: "Laptop", precio: 500, categoria: "Electrónica" },
    { nombre: "Auriculares", precio: 50, categoria: "Electrónica" },
    { nombre: "Silla", precio: 60, categoria: "Muebles" }
];

// 2. Se define una función llamada `productosPorCategoria` que toma un parámetro llamado `categoria`.
// La función tiene como objetivo devolver un array de productos cuya categoría coincida con el parámetro `categoria`.
function productosPorCategoria(categoria) {
    // Dentro de la función, usamos el método `filter` del array `productos` para filtrar los productos.
    // `filter` crea un nuevo array con todos los elementos que cumplan la condición definida en la función de callback.
    return productos.filter(producto => producto.categoria === categoria);
    // La función de callback `producto => producto.categoria === categoria` verifica si la categoría del producto
    // es igual a la categoría que se pasa como parámetro a la función `productosPorCategoria`.
};

// 3. Aquí se imprime en consola el resultado de llamar a la función `productosPorCategoria`
// con el parámetro `"Electrónica"`, lo que nos devolverá un array con todos los productos de esa categoría.
console.log(productosPorCategoria("Electrónica"));
// Resultado esperado: [ { nombre: 'Laptop', precio: 500, categoria: 'Electrónica' }, { nombre: 'Auriculares', precio: 50, categoria: 'Electrónica' } ]





// Ejercicio 5: Recursión - Suma de los N Primeros Números
// 1. Escribe una función recursiva llamada `sumaNumeros` que calcule la suma de los primeros N números naturales.
// 2. Llama a la función con el número 10 y muestra el resultado en consola.

function sumaNumeros(n) {
    if (n === 0) {
        return 0;
    }
    return n + sumaNumeros(n - 1);
}

console.log(sumaNumeros(10));  // Resultado esperado: 55


// Ejercicio 6: Bucle While y Arreglos
// 1. Crea un array de 10 números aleatorios entre 1 y 100.
// 2. Usa un bucle `while` para recorrer el array y contar cuántos números son mayores a 50.
// 3. Imprime el contador al final.

let numerosAleatorios = [];
for (let i = 0; i < 10; i++) {
    numerosAleatorios.push(Math.floor(Math.random() * 100) + 1);
}

let contador = 0;
let i = 0;
while (i < numerosAleatorios.length) {
    if (numerosAleatorios[i] > 50) {
        contador++;
    }
    i++;
}

console.log(`Cantidad de números mayores a 50: ${contador}`);


// Ejercicio 7: Comparación de Objetos
// 1. Crea dos objetos `persona1` y `persona2` con las mismas propiedades: `nombre`, `edad` y `profesion`.
// 2. Crea una función llamada `compararPersonas` que reciba dos objetos `persona` como parámetros y compare si son iguales en todas sus propiedades.
// 3. Imprime el resultado de la comparación en consola.

let persona1 = {
    nombre: "Carlos",
    edad: 30,
    profesion: "Ingeniero"
};

let persona2 = {
    nombre: "Carlos",
    edad: 30,
    profesion: "Ingeniero"
};

function compararPersonas(persona1, persona2) {
    return persona1.nombre === persona2.nombre && persona1.edad === persona2.edad && persona1.profesion === persona2.profesion;
}

console.log(compararPersonas(persona1, persona2));  // Resultado esperado: true


// Ejercicio 8: Métodos de Arrays - Reduce
// 1. Declara un array `notas` con los puntajes de 5 estudiantes en una asignatura.
// 2. Usa el método `reduce()` para calcular el promedio de las notas.
// 3. Muestra el resultado en consola.

let notas = [85, 92, 78, 90, 88];

let promedio = notas.reduce((total, nota) => total + nota, 0) / notas.length;

console.log(`El promedio de las notas es: ${promedio}`);  // Resultado esperado: 86.6


// Ejercicio 9: Uso de Set para Filtrar Elementos Duplicados
// 1. Declara un array `numeros` con varios números, algunos de los cuales se repiten.
// 2. Usa un `Set` para eliminar los números duplicados y luego imprime el array sin duplicados en consola.

let numerosConDuplicados = [1, 2, 3, 4, 5, 1, 3, 4, 6, 7, 8, 5];

let numerosSinDuplicados = [...new Set(numerosConDuplicados)];

console.log(numerosSinDuplicados);  // Resultado esperado: [1, 2, 3, 4, 5, 6, 7, 8]


// Ejercicio 10: Trabajo con Fechas
// 1. Crea una función llamada `diasHastaCumpleaños` que reciba una fecha de cumpleaños como parámetro.
// 2. La función debe calcular cuántos días faltan hasta el próximo cumpleaños desde la fecha actual.
// 3. Imprime el resultado en consola.

function diasHastaCumpleaños(fechaCumpleaños) {
    const hoy = new Date();
    let cumple = new Date(fechaCumpleaños);
    cumple.setFullYear(hoy.getFullYear());

    if (cumple < hoy) {
        cumple.setFullYear(hoy.getFullYear() + 1);
    }

    const diferencia = cumple - hoy;
    return Math.ceil(diferencia / (1000 * 60 * 60 * 24));  // Convertir la diferencia a días
}

let cumpleaños = "2024-12-25";
console.log(`Faltan ${diasHastaCumpleaños(cumpleaños)} días hasta tu próximo cumpleaños.`);
