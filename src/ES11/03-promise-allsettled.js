const promise1 = new Promise((resolve, reject) => {
    (true)
        ? resolve('Resolve')
        : reject('Reject')
})
const promise2 = new Promise((resolve, reject) => reject('Reject'));
const promise3 = new Promise((resolve, reject) => resolve('Resolve'));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))