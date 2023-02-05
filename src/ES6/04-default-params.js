function newUser (name, age, country) {
    var name = name || 'Jeffer';
    var age = age || 25;
    var country = country || 'CO';

    console.log(name, age, country);
}

newUser(); // Jeffer 25 CO
newUser('Steven', 24, 'ES'); // Steven 24 ES
newUser( undefined, undefined, 'ES'); // Jeffer 25 ES

// default params ES6

function newAdmin (name = 'Admin', age = 28, country = 'CL', password = '12345') {
    console.log(name, age, country, password);
}

newAdmin(); // Admin 28 CL 12345
newAdmin('Jefferson', 28, 'EU', 'Coca-Cola-J8S'); // Jefferson 28 EU Coca-Cola-J8S
newAdmin(undefined, undefined, undefined, 'Coca-Cola-J8S'); // Admin 28 CL Coca-Cola-J8S