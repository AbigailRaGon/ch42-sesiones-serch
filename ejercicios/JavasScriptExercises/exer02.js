//Un objeto es una coleccion de propiedades y metodos
// Los valores de las propiedades pueden ser de cualquier tipo (incluso otros objetos)
//Una propiedad es una asociacion entre un nombre(key) y un valor(value).

/*
Exercise #2 (sugerencia map() )
Write a function that:
•Takes in an array of numbers.
•Doubles the value of each number in the array.
•Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. 
The output should be [2, 4, 8, 10]
*/
/*El método map() en JavaScript crea una nueva matriz aplicando una función a cada elemento de la matriz original. Devuelve una nueva matriz y los elementos de la matriz son el resultado de la función de devolución de llamada.*/
//SINTAXIS map((element, index, array) => { /* … */ })

const simpleNumbers = [5 , 10 , 15 , 20 , 25];
const doubleValueNumbers = simpleNumbers.map(number => number*2 );

console.log(doubleValueNumbers); // [10, 20, 30, 40, 50]