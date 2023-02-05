function gretting (name) {
    console.log(`Good Morning, ${name}`);
}
gretting('Jeffer'); // Good Morning Jeffer

const gretting2 = (name) => {
    return gretting(name);
}
gretting2('Steven'); // Good Morning Steven

const gretting3 = name => gretting2(name);
gretting3('Daniela'); // Good Morning Daniela