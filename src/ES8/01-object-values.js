const countries = { MX: 'mexico', CO: 'Colombia', Cl: 'Chile', PE: 'Peru' }
const valuesCountries = Object.values(countries);
// Object.value recibe como parametro un objecto
// Y retorna un array con los valores de cada key dentro del objeto

console.log(valuesCountries); // [ 'mexico', 'Colombia', 'Chile', 'Peru' ]