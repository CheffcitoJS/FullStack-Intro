// Ejercicio: Manipulación de Arrays y Funciones
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







// Ejercicio: Comparación de Objetos
// 1. Crea dos objetos `persona1` y `persona2` con las mismas propiedades: `nombre`, `edad` y `profesion`.
// 2. Crea una función llamada `compararPersonas` que reciba dos objetos `persona` como parámetros y compare si son iguales en todas sus propiedades.
// 3. Imprime el resultado de la comparación en consola.
// 1. Se crean dos objetos llamados `persona1` y `persona2`, que tienen las mismas propiedades:

// `nombre`, `edad` y `profesion`, con valores idénticos.
let persona1 = {
    nombre: "Carlos",   // propiedad `nombre` con valor "Carlos"
    edad: 30,          // propiedad `edad` con valor 30
    profesion: "Ingeniero"  // propiedad `profesion` con valor "Ingeniero"
};

let persona2 = {
    nombre: "Carlos",   // propiedad `nombre` con valor "Carlos"
    edad: 30,          // propiedad `edad` con valor 30
    profesion: "Ingeniero"  // propiedad `profesion` con valor "Ingeniero"
};

// 2. Se define una función llamada `compararPersonas` que recibe dos objetos como parámetros: `persona1` y `persona2`.
// La función tiene como objetivo comparar las propiedades de ambos objetos para ver si son iguales en todos los aspectos.
function compararPersonas(persona1, persona2) {
    // La función devuelve `true` si todas las propiedades de ambos objetos son iguales.
    // Se compara cada propiedad de `persona1` con la propiedad correspondiente de `persona2`.
    return persona1.nombre === persona2.nombre &&   // Compara el nombre de las dos personas
           persona1.edad === persona2.edad &&       // Compara la edad de las dos personas
           persona1.profesion === persona2.profesion; // Compara la profesión de las dos personas
}

// 3. Se imprime el resultado de llamar a la función `compararPersonas` pasando `persona1` y `persona2` como parámetros.
// Como ambas personas tienen exactamente las mismas propiedades y valores, la función devolverá `true`.
console.log(compararPersonas(persona1, persona2));  // Resultado esperado: true
