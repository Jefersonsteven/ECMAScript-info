const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3'); // add agrega un item a el objeto.

console.log(list);
console.log(list.delete('item 2')); // delete remueve un item 
// y me entraga true si el item esta y false si no esta.

console.log(list);
console.log(list.has('item 2')); // has me entraga true si el item 
// esta y false si no esta.


list.clear(); // elimina todos lo items del objeto
console.log(list);

console.log(list.size); // retorna la cantida de items dentro 
// del objeto