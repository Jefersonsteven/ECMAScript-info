let numbers = [1, 2, 3, 6, 7, 9];
console.log(numbers.includes(7)); // true 
console.log(numbers.includes(5)); // false
// includes es un metodo que recibe como argumento un valor y lo busca
// dentro de un array si el valor esta retorna un true y si no retorna
// un false

console.log(numbers.includes(6, -2))// false
console.log(numbers.includes(6, -3))// true
// si al parametro de indice la paso un numero negativo buscara de
// derecha a izquierda hasta el indice indicado.

console.log(numbers.includes(2, 2)); // false
// includes recibe dos parametro el valor a buscar y el indice desde
// donde partira la busqueda (el indice por default es 0)

let hello = 'Hello, world';
console.log(hello.includes('world')); // true