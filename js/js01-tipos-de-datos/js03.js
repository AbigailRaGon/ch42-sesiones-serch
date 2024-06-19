console.log("Sesion JS 03 Remy ");

const changeImage = (imageID, imagePath) => document.getElementById( imageID).src = imagePath;

//====ARRAY======================================

/* 
El tipo array es un tipo de Objeto Especial ya que cuenta con diferentes atributos y metodos para realizar diferentes operaciones

Un Array permite almacenar multiples valores
*/

//Definir un array
["Remy", 1, true];

// Crear un array de nombres y asignarlo a una variable
const nombres=["Dulce","Karina", "Diana"];
const primerCaracter = "Ayer soñe que...".charAt(0);
console.log(primerCaracter); //A

const primerNombre = nombres[0]; // Dulce
console.log(primerNombre);

//Imprime Directamente a Diana
console.log(nombres[2]); //Diana

//Los arrays son mutables
console.log(nombres);

//Vamos a modificar un elemento de mi arreglo
//Los arrays son mutables
nombres[1] = "Kari";
console.log(nombres); //['Dulce', 'Kari', 'Diana']

//Agregar un indice que no existia
nombres[3] = "Yoli";
console.log(nombres); //['Dulce', 'Kari', 'Diana', 'Yoli']

//Agregar un elemento , en un indice que no existe
nombres[10] = "Ale";
console.log(nombres); //['Dulce', 'Kari', 'Diana', 'Yoli', empty × 6, 'Ale']
console.log(nombres[9]); //undefined por que esta vacio

//Verificar el numero de elementos de un arreglo
console.log(nombres.length); //11

//=======VAMOS AL SUPER====================

const panes = [];

//Contar numero de elementos de un arreglo
console.log(panes.length); // 0

//Agregar un elemento indicando el indice
panes[0]= "Pan de ajo";

//Agregar uno o mas elemento al final de mi arreglo con push()
//Retorno: la longitud del arreglo
panes.push("Dona de chocolate");
console.log(panes);
console.log(`Total de elementos en panes:${panes.push("bolillo", "roles")}`); //4
console.log(panes);

//Eliminar el ultimo elemento del arreglo
//pop(): siempre elimina el ultimo elemento
//retorna: el elemento eliminado
console.log(panes.pop()); // Roles
console.log(panes);

//unshift(): Agregar uno o mas elementos al inicio del arreglo
//retorna la longitud del arreglo
console.log(panes.unshift("cacahuate", "concha"));//5
console.log(panes);

//shift elimina el primer elemento de mi arreglo
//retorna el elemento eliminado
console.log(panes.shift()); //cacahuate

//Revisar docuentacion para consultar otro tipo de metodos que nos ayudan para modificar el Array.

//===================================================

//PEPS: primero en entrar, primero en salir
//FIFO: first input first output

const frutas=["mango", "piña"];
frutas.push("melon");
frutas.shift();//Mango
console.log(frutas);

//LIFO: Last Input First Output
const eliminados=["hamburguesa", "chiles rellenos"];
eliminados.push("tacos");
console.log(eliminados);
eliminados.pop(); //tacos
console.log(eliminados);

//Buscar elementos en el arreglo
//indexOf: buscar el indice de la primera aparicion de un elemento
//retorna: el indice del elemento, si no se encuentra, retorna -1
console.log(panes);
const numIndiceDelElemento = panes.indexOf("Pan de ajo");
console.log(`Índice el elemento encontrado: ${numIndiceDelElemento}`)
if(numIndiceDelElemento !== -1){
    console.log("yuju, tu pan si lo tenemos")
}else{
    console.log("lo siento, tu pan no lo tengo registrado")
};




