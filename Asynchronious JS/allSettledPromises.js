//it's a way to get all promises if one of them is rejected is to use allSettled() calls

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000)
});

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(reject, 4000)
});

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
    .catch(e => console.log('error found', e))