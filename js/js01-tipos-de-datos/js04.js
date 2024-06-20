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

