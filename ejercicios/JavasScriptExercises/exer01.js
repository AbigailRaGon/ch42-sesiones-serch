/*
Array [elemento1 , elemento2] son estructuras que nos permiten 
almacenar varios datos, sin tener que preocuparnos 
por el orden o la organización.
.join(  ) retorna una cadena con todos los elementos de array dentro, ejemplo:

1. var array = ['dato1', 2, 'masDatos']; 
2. var datosJuntos = array.join(); // 'dato1,2,masDatos' 
3. var datosJuntos2 = array.join(''); // 'dato12masDatos' 
4. var datosJuntos3 = array.join(' + '); // 'dato1 + 2 + masDatos'
*/

//Ejercicio 1

let arr = ["This", "is", "a", "sentence."];

function printOutString() {
    let arr = ["This", "is", "a", "sentence."];
    console.log(arr.join("  "));

}

printOutString(); // This  is  a  sentence.

//Complete the function to print out the string: This is a sentence.
  