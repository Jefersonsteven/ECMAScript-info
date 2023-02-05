var lastName = 'David';
lastName = 'Oscar';
console.log(lastName); 
// Se reasigno el valor paso de ser David
// a ser Oscar.

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);
// Se reasigno el valor paso de ser Apple
// a ser Kiwi.


const animal = "dog";
animal = "cat";
console.log(animal); 
// me dara error const no me dejar reasignar valor

var lastName = 'Julio';
// let fruit = 'Sandia';
// const animal = 'Dolphin';
// con var puedo volver a declarar una variable
// pero const y let no me dejaran


const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }

    console.log(fruit1);
    console.log(fruit2); // error no is defined
    console.log(fruit3); // error no is defined
}

fruits();
// cuando se agrego let y const a la para se agrego el concepto de block scope
// que quiere decir que si se crea una variable con const o let dentro de un 
// bloque solo se podra acceder a esa variable dentro de ese bloque