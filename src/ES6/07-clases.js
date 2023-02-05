//Declararando Clase
//class User {};


// Instanciando Clase
// const User1 = new User();

class User {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // metodos
    salute() {
        return 'Hello';
    }

    gretting() {
        return `${this.salute()}, ${this.name}`;
    }

    // setters and getters
    get youAge() {
        return this.age;
    }

    set youAge(a) {
        this.age = a;
    }
};

const jeffer = new User('Jeffer', 25);
console.log(jeffer.gretting());

const steven = new User('Steven', 24);
console.log(steven.gretting());
console.log(steven.youAge);
console.log(steven.youAge = 25);
console.log(steven);

