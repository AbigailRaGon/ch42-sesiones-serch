/*
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1. Write a command that prints out all of the people in the list.
2. Write the command to remove "Dani" from the array.
3. Write the command to remove "Juan" from the array.
4. Write the command to move "Luis" to the front of the array.
5. Write the command to add your name to the end of the array.
6. Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7. Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//1. Write a command that prints out all of the people in the list.

console.log(people.join(" - ")); // Maria - Dani - Luis - Juan - Camila

//2. Write the command to remove "Dani" from the array.

let position = people.indexOf("Dani");
console.log(position); // 1
let deleteElement = people.splice(position , 1);
console.log(people.join(" - ")); // Maria - Luis - Juan - Camila

//3. Write the command to remove "Juan" from the array.

let positionTwo = people.indexOf("Juan");
let deleteElementTwo = people.splice(positionTwo , 1);
console.log(people.join(" - ")); // Maria - Luis - Camila
console.log(people.length-1);// 2

// 4. Write the command to move "Luis" to the front of the array.
console.log(people.splice(0,2, "Luis", "Maria"));
console.log(people);

//5. Write the command to add your name to the end of the array.
people.push("Abigail");
console.log(people);

//6. Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
for(let i=0; i<people.length ; i++){
    console.log(i, people[i]);
    if(people[i]==="Maria")
        break;
};

//7. Write the command that gives the indexOf where "Maria" is located.
const positionMaria = people.indexOf("Maria");
console.log(positionMaria); // 1


//At the end of the exercise, there should be 4 people in the array.
console.log(people); // (4) ['Luis', 'Maria', 'Camila', 'Abigail']








