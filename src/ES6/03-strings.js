let hello = 'Hello';
let world = 'world';
let salute = hello + ', ' + world + '!'; 
console.log(salute); // Hello, world!

// Esta era la manera de concatenar antes de esmascript.
// La verdad esta manera es viable, pero no es muy amigable
// y se pone peor cuando queremos concatenar strings  mas largos


// Template literals
let salutePlus = `${hello}, ${world}!`;
console.log(salutePlus); // Hello, world!

// Se utilizan las comillas francesas `` y todos
// los strings que quiera concatenar que esten
// dentro de variables estaran dentro del signo de llaves {} 
// despues del signo monetario $

// Multi-line strings
let lorem = 'estro es un string \n' + 'esto es otra linea';

// Antes de ecmascript para concatenar string y hacer saltos
// de linea era de esa manera.

let lorem2 = `Esto es una string
Esto es otro string mas grande OK
`;

// Ahora gracia a los template literals podemos hacer saltos
// de linea de esta manera mucho mas amigable.

console.log(lorem);
console.log(lorem2);