console.log("Sesion Js02");
// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

Función: Conjunto de instrucciones que realiza una tarea o calcula un valor.
  Código que se puede reutilizar.


  ----------- Funciones declaradas --------------
    (function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
    function nombreFuncionCamelCase ( parámetros ){
        //cuerpo de la función
        instrucciones;
    }

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

const saludo = function greeting2( name ){
    return `Hola, me llamo ${name} y tengo hambre`;
} ;
console.log( saludo("Sergio") );


// Realizar una función que reciba un palabra y retorne la palabra en minúscula
//Realizar las dos funciones, funcion declarada y expresada


/** Realizar la función acá */
//Función declarada
function wordToLowerCase(phrase){
    return phrase.toLowerCase();
}
//Función expresada
const wordToLowerCase2 = function mayusPhrase(phrase){
    return phrase.toLowerCase();
}
// uso de la función
console.log( wordToLowerCase("YUPIII YUPI EL MUÑECO CHUCKY")); //yupiii yupi el muñeco chucky

/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
-Solo un parametro no son necesarios los parentesis (opcional).
sintaxis:
    const nombreVariable = (parametros) => instrucción;

    Si en un arrow fuction se utilizan las {} se debe de agregar explicitamente la palabra retorno para retornar un valor

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Realizar una función expresada para calcular el área de un rectángulo.
/** TODO: crear la función 

function calcularAreaRectangulo (largo,ancho){
    const areaRectangle = largo * ancho;
    return areaRectangle;
}

const resultadoAreaRectangulo = calcularAreaRectangulo (6,4);
*/

const areaRectangle = function area( base , altura ){
    return base * altura;
}

// Funcion en flecha
const calculoAreaRectangulo = (base, altura)=> base * altura;

// uso de la función
console.log(`El área de rectángulo es ${ areaRectangle( 6, 4) }`); // 24




// Realizar una Arrow function que calcule el impuesto de un valor
/** TODO calcular el impuesto de un valor */
const calcularImpuesto = (precio , iva) => precio * iva;


// caso de uso:
console.log( `El impuesto de los calcetines es: ${calcularImpuesto(70.50, .16 ) }`)



// Ejercicios: Convertir las siguientes funciones a Arrow functions.

/** Función 1: Sumar dos números */
function sumar(a, b) {
    return a + b;
}
console.log( `La suma de 100 + 5 = ${sumar(100,5)}`); // 105

/** Función 2: Verificar si un número es par 
function esPar(num) {
    return num % 2 === 0;
}*/
//Solo es un parametro, no son necesarios parentesis 
const esPar=num=>num % 2 === 0;

console.log( `El número 18 es par? ${esPar(18)}`); // true
console.log( `El número 23 es par? ${esPar(23)}`); // false

/** Función 3: Verificar si tres números terminan con el mismo dígito 
function mismosUltimosDigitos(num1, num2, num3) {
    const ultimoDigito1 = num1 % 10;
    const ultimoDigito2 = num2 % 10;
    const ultimoDigito3 = num3 % 10;
    return ultimoDigito1 === ultimoDigito2 && ultimoDigito1 === ultimoDigito3;
}*/

const mismosUltimosDigitos = (num1, num2, num3) => {
    const ultimoDigito1 = num1 % 10; //3
    const ultimoDigito2 = num2 % 10; // 3 es el residuo
    const ultimoDigito3 = num3 % 10; // 3
    return ultimoDigito1 === ultimoDigito2 && ultimoDigito1 === ultimoDigito3;
};

console.log(`El num. 23, 203 y 1013 terminan en 3? ${mismosUltimosDigitos(23,203,1013)}`);

//Refactorización para que el codigo sea mas facil de leer 
/* 
const mismosUltimosDigitos = (num1, num2, num3) =>
    num1 % 10 === num2 % 10 && num1 % 10 === num3 % 10;*/




 // Hacer con arrow function una función que reciba un texto e imprima en consola
 
const printToConsole = (text) => console.log(text);


 // Hacer con arrow function una función que reciba un texto e imprima en alert
 const printToAlert = (text) => alert(text);

// Realizar una función(arrow function) que reciba un texto
// y que pueda imprimir en consola, alert y quiza en el futuro
// se agregue otra salida para imprimir.

//Hacer con arrow una funcion que reciba un texto e imprima en H1 "app-title"
const printToH1 = (text) => document.getElementById("app-title").innerHTML = text;


const printMessageIfElse = (text, optionToPrint) => {
    if(optionToPrint === "console"){
        printToConsole(text);
    } else if (optionToPrint === "alert"){ // else if nos ayuda agregar mas opciones de evaluacion
        printToAlert(text);
    } else if( optionToPrint === "h1" ){
        printToH1(text);
    
    }else {
        console.error("Que transa, te equivocaste de opción");
    }

};
//Refactorizacion con codigo switch
const printMessageSwitch = (text, optionToPrint) => {
/*
Switch: es una alternativa a if-else. permite ejecutar diferentes bloques de código basandose en el valor de un expresion
*/
    switch(optionToPrint){
        case "console":
            printToConsole(text);
            break;
        case "alert":
            printToAlert(text);
            break;
        case "h1":
            printToH1(text);
            break;
    default:
        console.error("Opcion incorrecta")

    }

};

//Uso de la función, colocamos los dos argumentos printMessage = (text("Hola, amigas"), optionToPrint ("console"));

//Modificacion en la memoria del navegador
// Esto lo permite la APIDOM, esto es una modificacin dinámica
/*printMessage("Hola, amigas","h1");
printMessage("no, no (se rie en bolillense)","console");
printMessage("Tres tristes tigres", "CONSOLE");*/


//============================================
/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

const printMessageUsingCallback = (text, functionToPrint) => functionToPrint(text); 

//printMessageUsingCallback("Cualquiera puede cocinar", 18) Arroja un error

printMessageUsingCallback("Cualquiera puede cocinar", printToConsole); //Solo pasamos el nombre de la funcion sin parentesis ()
printMessageUsingCallback("Cualquiera puede cocinar", printToH1); // printToH1 tiene un alias con functionToPrint deben de ser compatibles (reciben los mismos parametros), por ejemplo comparten text

// ejercicio
// Crear una función que modifique "logo-title" con un nuevo mensaje.
const printToLogo = (text) => document.getElementById("logo-title").innerHTML = text;

// Usar printMessageUsingCallback para pasarle la nueva función(como referencia), 
// con el mensaje: "Ratatuil".

printMessageUsingCallback("Ratotuil", printToLogo);

//CAMBIAR LAS IMAGENES DE LA PAGINA DE FORMA DINAMICA
const changeImage = (imageID, imagePath) => document.getElementById( imageID).src = imagePath;

changeImage ("img1", "./public/img/remy01.jpg");
changeImage ("img2", "./public/img/remy02.jpg");
changeImage ("img3", "./public/img/remy03.jpg");
changeImage ("img4", "./public/img/remy04.jpg");
//Aqui estamos llamando la funcion callback y agregamos las rutas e imagenes 
//funcion es la misma y solo cambia el nombre de la imagen y la ruta