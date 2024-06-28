
/*
Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/

const studentOneCourses = ['Math', 'English', 'Programming'];
const studentTwoCourses = ['Geography', 'Spanish', 'Programming'];

//Iteracion del arreglo
for (let course1 of studentOneCourses ){
    console.log(course1);
    for(let course2 of studentTwoCourses){
        if(course1 === course2) console.log("Estudiante uno toma el curso " + course1, " y el segundo estudiante tambien cursa " + course2);
    }
}

//==========filter()
/*
El método filter() de Array crea una copia superficial de una parte de una matriz dada, filtra solo los elementos de la matriz que pasan la prueba implementada por alguna función proporcionada.
Es una herramienta eficaz para extraer datos de forma selectiva de matrices en función de criterios específicos.
*/
//Sintaxis: array.filter(callback(element, index, arr), thisValue)


//===========Loop For of
function sameSubject (index){
    return index === `Programming`;
}

const student1Courses = ['Math', 'English', 'Programming'].filter(sameSubject);
console.log(student1Courses); //['Programming']

const student2Courses = ['Geography', 'Spanish', 'Programming'].filter(sameSubject);console.log(student2Courses); //['Programming']

//==========includes()
/*
El método includes() devuelve true si una matriz contiene un valor especificado. Por el contrario, devuelve false si no se encuentra el valor. Este método simplifica la comprobación de la presencia de un elemento dentro de una matriz, lo que proporciona un resultado booleano sencillo.
*/
//Sintaxis: array.includes(searchElement, start);

console.log (student1Courses.includes(`Programming`)); // true
console.log (student2Courses.includes(`Programming`)); // true


//============================Función de Serch, GRACIAS :D
const commonCourse2 = student1Courses.filter ( course1 => student2Courses.includes(course1));
console.log(commonCourse2);






