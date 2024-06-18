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
const calcularImpuesto = (precio , iva) => precio * iva + precio;


// caso de uso:
console.log( `El impuesto de los calcetines es: ${calcularImpuesto(70.50, .16 ) }`)