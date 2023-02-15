const promise1 = new Promise((resolve, reject) => {
    (false && true)
        ? resolve('Resolve1')
        : reject('Reject1')
})
const promise2 = new Promise((resolve, reject) => reject('Reject2'));
const promise3 = new Promise((resolve, reject) => resolve('Resolve3'));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));