console.log("Sesion JS01, tipos de datos");

/*
Tipos de datos de Java Script: Objetos y primitivos
Los datos primitivos: string,boolean,number,null,undefined,bigint,symbol. Son inmutables, no tienen atributos (caracteristicas) ni metodos (acciones).

Objetos: Poseen atributos y metodos (caracteristicas y acciones): 

tipo object {clave: valor, edad:25, name: "bolillo"}

tipo array [ element_1, element_2, "bolillo", 50, {  }, {  },]
*/

//======== DATOS PRIMITIVOS =========
/*
String: "Hola, ya mero es la una de la tarde" o 'Día azul'

String template literals ` ` (backtick): es una forma mas flexible y legible de trabajar con cadenas de texto . Permiten incrustar expresiones dentro de la cadena utilizando la interpolación  ${}
*/

console.log( typeof "hola" ); // "string"
console.log( typeof "" ); // "string" (empty string)
console.log( "El resultado de 3*4 = " + (3*4) + " pesos");
/*
La interpolacion con ${} en java script es una caracteristica de los TEMPLATE LITERALS que permite insertar variables y expresiones dentro de cadenas de texto.
Esto se hace envolviendo las expresiones en ${} dentro de una cadena delimitada por comillas invertidas (``).
*/
console.log(`El resultado de 3 * 4 = ${3*4} pesos`);

/* 
Tipos de datos Number
- numeros positivos: 100, 1, 0.258
- numeros negativos:-1
-valores que no pueden ser representados numericamente: NaN
-numeros infinitos: +infinity, -infinity
*/
console.log( typeof 3.141692); // number
console.log( typeof (3*3)); // number
console.log( typeof (3*"pitufo alegre")); // number NaN
console.log( typeof +Infinity); // number

/* Cuando se realizan operaciones que exceden los limites de MAX_SAFE_INTEGER se produce una perdida de presición.

Pérdida de presición: no se pueden representar exactamente ciertos valores, tipicamente en operaciones de numeros de punto flotante.
*/
console.log(`Pérdida de presición: 0.1 + 0.2 = ${0.1 + 0.2}`)
console.log(`Valor entero seguro en JavaScript: ${Number.MAX_SAFE_INTEGER}`); // 9007199254740992
console.log(`MAX-SAFE-INTEGER + 1: ${Number.MAX_SAFE_INTEGER +1}`);
console.log(`MAX-SAFE-INTEGER + 2: ${Number.MAX_SAFE_INTEGER +2}`);
console.log(`MAX-SAFE-INTEGER + 3: ${Number.MAX_SAFE_INTEGER +3}`);
console.log(`MAX-SAFE-INTEGER + 4: ${Number.MAX_SAFE_INTEGER +4}`);
console.log(`MAX-SAFE-INTEGER + 5: ${Number.MAX_SAFE_INTEGER +5}`);
//Si nos salimos del numero seguro empiezan a ocurrir errores en los resultados

/*
Tipos de datos BigInt
Sirve para representar valores numericos enteros, de los que el tipo number no pueda representar o no es seguro.
Las operaciones BigInt se debe de hacer con otro bigInt.
SOLAMENTE ENTEROS MUY GRANDES
*/
const myBigInt = 9007199254740991n; //siempre terminan en n y asi lo podemos identificar
console.log(typeof myBigInt); // bigint
console.log(`Resultado de myBigInt + 1n: ${ myBigInt + 1n}`);

/*
Tipo de dato undefined
Una variable que es declarada, pero el tipo de datos no es definido.
*/
let myName;
console.log( typeof myName); // "Undefined"

/*
Tipo de dato Null
Una variable que intencionalmente se borra el tipo de dato. Nunca utilizar typeof por que lanza un error
*/
let myAge;
console.log(`Tipo de dato en my Age ${ typeof myAge}`); //undefined
myAge = 20;
console.log(`Tipo de dato en my Age ${ typeof myAge}`); //number
myAge = null; // intensionalmente se borra el dato
console.log(`Tipo de dato en my Age ${ typeof myAge}`); // object
console.log(`myAge es null? ${myAge===null}`); // true, no es correcto utilizar typeof con un dato null

/*Tipo de dato Boolean 
Tiene dos estados: true y false
*/
const isActive = true;