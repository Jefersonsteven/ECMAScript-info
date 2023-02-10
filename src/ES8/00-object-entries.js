const user = {
    name: 'Jeffer',
    age: 28,
    country: 'Colombia'
}

const userArray = Object.entries(user);
// Object.entries() recibe un objecto como parametro
// Y retorna un array con cada key y su valor dentro de un array.

console.log(userKeys);
// [ [ 'name', 'Jeffer' ], [ 'age', 28 ], [ 'country', 'Colombia' ] ]
