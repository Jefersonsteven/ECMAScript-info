const user = { username: 'Gfrey', age: 24, country: 'CO' };
const { username, ...values } = user; // ...values se encarga de guardar
// los demas elementos restantes

console.table(values);
console.log(values);