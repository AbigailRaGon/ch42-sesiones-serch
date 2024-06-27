/*
Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

*/

/*
El método reduce() de un Array ejecuta una función llamada "reductor" proporcionada por el usuario en cada elemento de la matriz, en orden, pasando el valor devuelto del cálculo en el elemento anterior. El resultado final de ejecutar el reductor en todos los elementos de la matriz es un solo valor.

SINTAXIS array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
*/

const elArregloEs = [2, 4, 6, 8, 10, 20 ];

console.log(elArregloEs.reduce((sumatoria, currentValue)=> sumatoria + currentValue, 0)); // 50
console.log(elArregloEs.reduce((multiplication, currentValue)=> multiplication * currentValue, 1)); // 76800

//====================================================================

const elOtroArregloEs = [5, 10, 15, 20, 25, 30];

function sumatoriaArray (suma,number){return suma + number};

function resultadoSuma (){console.log (elOtroArregloEs.reduce(sumatoriaArray))};
resultadoSuma (); // 105

function multiplicaArray (multiplication,number){return multiplication * number};

function resultadoProducto (){console.log (elOtroArregloEs.reduce(multiplicaArray))};
resultadoProducto (); // 11250000


