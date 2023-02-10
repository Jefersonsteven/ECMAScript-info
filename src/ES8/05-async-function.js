const gretting = () => console.log(`Hey, how are you?!, I'm Here`);

const fnAsync = () => {
    let isTrue = false;

    return new Promise((resolve, reject) => {
        (isTrue)
        ? setTimeout(() => resolve(gretting()), 2000)
        : reject(new Error('Error!'));
    });
}

const anotherFn = async () => {
    console.log('Ejecutando promesa:');
    try {
        const something = await fnAsync();
        return something;
    }
    catch {
        return console.error('La condicion no fue cumplida');
    }
}

console.log('Before');
anotherFn();
console.log('After');
console.log('Esperando el resultado de la promesa:');