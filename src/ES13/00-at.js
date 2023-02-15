
const array = ['one', 'two', 'three', 'four', 'five', 'six'];

console.log(array[array.length - 1]);

console.log(array.at(-1), array.at(-4));


for (let i = 1; i <= array.length; i++) {
    console.log(array.at(-i));
}