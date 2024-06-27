import { myFunctionRubi, pensamientoMariana, miPensamiento as pensamientoSerch } from "./js08-oop-user.js"
// con "as" podemos renombrar la variable dentro de este archivo

import { detallesMora } from "./js08-oop-user.js";
import { Comestible, Enlatado } from "./js08-comestibles.js";

console.log("Programacion orientada a objetos");

const miPensamiento = "Que bonitas presentaciones";
console.log(miPensamiento);
console.log(pensamientoMariana);
console.log(pensamientoSerch);
myFunctionRubi();
console.log(detallesMora.cortePelo());
//llegamos al 16 de septiembre y amay decide pintar a mora de ver,blanco y rojo
//modificamos los detalles de mora
detallesMora.color = "verde, blanco y rojo";
console.log(detallesMora.cortePelo());


// console.log( pensamientoArlette ); No se puede utilizar por que no
// está declarada la variable o no está importada, de hecho, no se puede
// importar la variable por que en js08-oop-user no está exportada.


//=================== Instanciar las clases para crear objetos (palabra reservada new) crear un objeto

const myArray = new Array("Hola", "Piensen bien", "El viernes temático");
myArray.length;
console.log(myArray.length); //3
console.log(myArray.join(" "));

//================ Instanciar la clase comestible=====
const papa = new Comestible();
const fresa = new Comestible("Fresa", "dulce");
const elote = new Comestible("Elote", "manjar de los dioses");
const mandarina = new Comestible("Tangerine", "ácida");

console.log(fresa.mostrarCaducidad());

console.log(mandarina.sabor);
mandarina.sabor = "cítrico";
console.log(mandarina.sabor);
mandarina.fechaCreacion = new Date ("2024-07-02T07:00:00");
console.log(mandarina.mostrarCaducidad());

//Hay datos sensibles que no deben de modificarse
// encapsulamiento de datos sensibles (restriccion de acceso) con # dentro de clase 
//el elemento encapsulado solo se puede modificar dentro de la clase


//===========Usando una clase heredada
const duraznosAlmibar = new Enlatado("Duraznos en Almibar");
console.log(duraznosAlmibar.mostrarCaducidad());
