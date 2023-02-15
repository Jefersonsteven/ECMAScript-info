class User {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // metodos
    #salute() {
        return 'Hello';
    }

    gretting() {
        return `${this.salute()}, ${this.name}`;
    }

    // setters and getters
    get #youAge() {
        return this.age;
    }

    set #youAge(a) {
        this.age = a;
    }
};

const jeffer = new User('Jeffer', 25);