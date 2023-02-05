let x = 5;

const anotherfunction = () => {
    return new Promise((resolve, reject) => {
        if (x < 6) {
            resolve('Hey!!')
        } else {
            reject('Ahhhhgg!!')
        }
    })
}

anotherfunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));
