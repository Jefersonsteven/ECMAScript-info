// 🟢 arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b); // con desestructuración
console.log(fruits[0], fruits[1]); // sin desestructuración


// 🟢 Object Destructuring

let user = { username: 'Jeffer', age: 25 };
let { username, age } = user;
console.log(username, age); // con desestructuración
console.log(user.username, user.age); // sin desestructuración


// Ejemplo

let date = [
    '22',
    'Monday',
    "May",
    '2022'
];

console.log(date['ko' + 'lo']);

let dateToday = `Today is ${date[1]}, ${date[2]} ${date[0]}, ${date[3]}`;
console.log(dateToday);

let [ number, day, month, year ] = date;
let dateToday2 = `Today is ${day}, ${month} ${number}, ${year}`;
console.log(dateToday2);

// 🟢 spread operator

let person = { name: 'Jeffer', age: 25 };
let country = 'CO';

let data = { ...person, country };

console.log(data);

// rest

function sum(num, ...values) {
    let y = num;
    values.forEach(function(x){
        y = y + x
    })
    return console.log(y);
}

sum(5, 6);
sum(5, 6, 4, 8, 27);





