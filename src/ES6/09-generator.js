function* iterate(arr) {
    for (let value of arr)  {
        yield value;
    }
}

const it = iterate(['Jeffer', 'Sosa', 'Maria', 'Pedro', 'Catalina']);
console.log(it.next().value); // Jeffer
console.log(it.next().value); // Sosa
console.log(it.next().value); // Maria
console.log(it.next().value); // Pedro
console.log(it.next().value); // Catalina

console.log(it.next().value); // undefined