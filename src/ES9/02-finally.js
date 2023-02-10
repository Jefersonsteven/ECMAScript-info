let x = 8;

const anotherfunction = () => {
    return new Promise((resolve, reject) => {
        (x < 6)
            ? resolve('Si es Menor')
            : reject('No Es menor')
    })
}

anotherfunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));
