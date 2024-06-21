console.log("Sesion JS04");

/*
El ciclo for en JavaScript es una estructura de control 
 que permite repetir un bloque de código un número específico 
 de veces. Es una de las formas más comunes de iteración 
 en JavaScript y es especialmente útil cuando 
 se trabaja con arrays o cuando se necesita 
 repetir una operación varias veces. 

 sintaxis:

    for( inicialización; condición; actualización) {
       // instrucciones
    }

*/

for(let counter = 0; counter < 5; counter = counter + 1){
    console.log("el valor de counter es " + counter);
}

//Imprimir 10 veces "hola ch42";
for(let counter = 0; counter < 10; counter = counter + 1){
    console.log("Hola CH42");
}

//Podemos incrementar la variable solo con ++


const names=["mariana", "silvia", "susy", "marbe"];

for(let index = 0; index < names.length; index++){
    console.log(index, names[index]);
}

//============================== 21/06/2024 

const signosZodiacales = [];
for (let i = 0; i < signosZodiacales.length ; i++){
    console.log(i, signosZodiacales[i]); 
}//No se puede ejecutar el ciclo por que no hay elementos en la variable 
//Respuesta correcta 0 veces


// uso de break 
//Se usa en ciclos (for,, while, do-while) y switch
//Su funcion es salir del ciclo actual o bloque case antes de que haya terminado de ejecutar todos sus iteraciones o casos

for(i=0; i<10 ; i++){
    console.log(`num de iteracion ${i}`);
    if(i===5){
        break;
    }
}
//RESPUESTA: se imprimira 6 veces, la instruccion console.log se va a ejecutar cuando la variable i es igual a 0,1,2,3,4,5,




//imprimir los signos de la variable signos ch42 y dejar de imprimir cuando se encuentre a un escorpio

const signosCh42 = ["acuario", "geminis", "escorpio", "sagitario", "sagitario", "escorpio"];

for(let i=0; i<signosCh42.length ; i++){
    console.log(i, signosCh42[i]);
    if(signosCh42[i]==="escorpio")
        break;
}

//imprimir en consola la tabla del 8
/*
   8 x 1 = 8
   8 x 2 = 16
   8 x 3 = 24
   8 x 4 = 
   8 x 5 = 
   8 x 6 = 
   8 x 7 = 
   8 x 8 = 
   8 x 9 = 
   8 x 10 = 
*/
const imprimirTablaDeMultiplicar = (number) => {
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
  };
  
  // Imprimir la del 3, 6 y 7
  imprimirTablaDeMultiplicar( 3 );
  imprimirTablaDeMultiplicar( 6 );
  imprimirTablaDeMultiplicar( 7 );

//Imprimir las tablas de multiplicar de los diferentes valores que pueda seleccionar un usuario
const numerosSeleccionados = [18, 20, 15, 1.5];

//imprimir en consola los valores del arreglo numeros seleccionados
for ( let i = 0; i < numerosSeleccionados.length; i++){
    //console.log(numerosSeleccionados[i]);
    imprimirTablaDeMultiplicar( numerosSeleccionados[i] );
}

//realizar lo anterior, sin usar la llamada a una funcion
//EJEMPLO DE CICLO ANIDADO
for ( let i = 0; i < numerosSeleccionados.length; i++){
    const number = numerosSeleccionados[i];
    for (let j = 1; j <= 10; j++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}