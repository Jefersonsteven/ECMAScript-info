
// flat
const arrays = [10,1,[2,3, [4,5],6],7];
console.log(arrays.flat(3)); // deja todos los valor de un array en una sola profundidad

let array = [ ...arrays.flat(3) ];
console.table(array);

// flatmap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2])); // hace un recorrido de cada valor del array y despues aplica un flat