console.log("sesión método map ()");

/*
Método map() de los arreglos.

Este método crea un nuevo array con los resultados de aplicar 
una función a cada uno de los elementos del array original. 
Es una herramienta muy poderosa para transformar datos 
de manera funcional y concisa.
Sintaxis:
arr.map(function callback(currentValue, index, array)
*/

/*
 Dado el arreglo [1, 2, 4, 10, 15] 
 Obtener un nuevo arreglo con el doble
 de valor del arreglo original: [ 2, 4, 8, 20, 30]
 */

 const duplicarValor = (array) => {
    const newArray = [];
    for(let i=0; i<array.length; i++){
        newArray.push([i]*2);
    }
    return newArray;

 };
 const myArray = [1,2,3,4,10,15];
 console.log(duplicarValor (myArray));

 /*
Método map() de los arreglos.

Este método crea un nuevo array con los resultados de aplicar 
una función a cada uno de los elementos del array original. 
Es una herramienta muy poderosa para transformar datos 
de manera funcional y concisa.
Sintaxis:
arr.map(function callback(currentValue, index, array)
*/
const duplicarEdad = (currentValue, index, array) =>{
    console.log(index, currentValue * 2, array);
    return (currentValue * 2);
};
const ages = [1,2,3,4,10,15];
const dobleAge = ages.map(duplicarEdad);
console.log (dobleAge);

 //----------------------------------------------

const numeros = [1,2,3,4,10,15];
const duplicarNumeros = numeros.map(function doble (currentValue){return currentValue *2});//arrow numeros.map(currentValue => currentValue*2);
console.log(duplicarNumeros);


//========================================REDUCE
const monedas = [5, 10, 5, 1, 50];

//Obtener  la sumatoria de todos los valores
//Ciclo for puede ser muy conflictiva
const sumarMonedas = (array) => {
    let sumatoria = 0;
    for (let index = 0; index < array.length; index++) {
        sumatoria = sumatoria + array[index] ;
    }
    return sumatoria;
}
console.log(sumarMonedas(monedas));
//método reduce
console.log(monedas.reduce((sumatoria, currentValue)=> sumatoria + currentValue, 100));

//INSERTAR TARJETAS CON MAP==========================================

const buttonSection = document.getElementById("arreglo-botones");
const insertCards = (electrolitos) =>{
    const cards = electrolitos.map(element => `
    <div class="col-lg-4 col-md-6 col-sm-10">
        <div class="card m-2">
            <div class="card-body">
                Consume ${element}
            </div>
        </div>
    </div>
    `);

    return cards.join("");
}
buttonSection.innerHTML = insertCards (["electrolit", "pedialit", "electrolife"]);
