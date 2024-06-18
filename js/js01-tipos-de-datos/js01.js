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

//=========CONVERSION EXPLICITA DE DATOS coercion de tipo===========


//Converson a STRING
const edadMascota = 10
console.log ("Edad de mi mascota " + edadMascota); //"Edad de mi mascota: 10"

//Conversión explicita
const edadMascotaString = String(edadMascota); // "10"
console.log("Edad de mi mascota en String "+ edadMascotaString); // "Edad de mi mascota String 10"

//Conversion a number
const costo="100";
//Conversion implicita
const costoConIVA= costo * 1.16; // 116.00

//Conversión explicita
const precioCroquetas = "1000.50";
const precioJabon = "25"; // Todos estos datos son un string
const precioPapel = "40";

const total = precioCroquetas + precioJabon + precioPapel; // operador + como concatenación entonces el resultado final seria 1000.502540

//Tenemos que hacer una conversion explicita
const total = parseFloat (precioCroquetas) + parseInt(precioJabon) + Number(precioPapel);

/*Number () vs parseInt()
-Number convierte enteros y decimales
-parseInt convierte solo la parte entera
*/

console.log( parseInt("10.456")); // 10
console.log(parseFloat("10.456")); // 10.456
console.log(Number("10.456")); // 10.456
//Number devuelve NaN si la cadena contiene algun caracter no numerico
//parseInt y parseFloat realiza la conversin hasta encontrar un caracter no numerio
//con parseInt y parseFloat, si la entrada comienza con un valor no numerico devuelve NaN

console.log(parseInt("10-25")); // 10
console.log(parseInt("10-25")); //NaN

//Para convertir un tipo de boolean a number se debe de utilizar Number()
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(parseInt (true)); // NaN

//Conversion a tipo boolean
//En la conversion a boolean los siguientes valores son false:
//""(empty string), 0, null, undefined

console.log(Boolean(1)); // true
console.log(Boolean(1000)); // true
console.log(Boolean(-1000)); // true
console.log(Boolean("Ya mero terminamos, me duele la cabeza")); //true
console.log(Boolean("")); // false, comillas juntas
console.log(Boolean("  ")); //Tiene un espacio, estonces es true

//https://symbl.cc/es/unicode-table/ revisar valores de cada letra y numero, el valor de 0 es 48 en la tabla, existen valores string y numericos, solo con booleanos
console.log(Boolean("0")); // true
console.log(Boolean(0)); //False
console.log(Boolean(Number("0"))); // false
// Boolean (0), number convierte el string a 0

//Resumen:
/*Conversiones numericas
NUMBER()
[] empty array = 0, Si contiene un valor [30]= 30.
 Si array tienen mas valores como [30,30] = NaN

STRING()
[] -> "", [12,2]->"12,2", function(){}-> "function(){}"
// {} ->"[object,object]", {clave:valor, age:17} ->"[object,object]"

*/

// Para convertir un objeto a String la forma correcta es usar el metodo JSON.stringyfy(objeto);

console.log(2<10); // true
console.log("22" < 10); // false
// Cuando son de diferentes tipos de datos la conversion es implicita, si son iguales no se puede
console.log("22" > "3"); //cuando los dos operandos sean string se evalua cada caracter por su posición en la TABLA UNICODE. Se compara el primer caracter del op1 con el primer caracter del op2, si son iguales se continua con el segundo operando

console.log("221">"24"); //false por la comparacion de los primeros digitos , los strings no coparan su valor numerico, mas bien comparan la posicion que tienen en la tabla unicode.

// Cuando los dos operandos sean string, se evalua cada caracter
// por su posición en la tabla unicode. Se compara el primer caracter del op1
// con el primer caracter del op2, si son iguales se continua con el segundo operando        
console.log(  "22" > "3"  );  // false 
        //    50   >  51   
console.log(  "221" > "24" ); // false
        //     50("2") >  52("4")
console.log(  "Mar" > "Dulce" ); // true
        //     77   >   68
console.log(  "Mar" > "Maricela" ); // false
console.log(  "marbe" > "Maricela" ); // true
       //      m > M
console.log(  "marbe".toLowerCase() > "Maricela".toLowerCase() );
      //       b > i     false
      //      98 > 105   false