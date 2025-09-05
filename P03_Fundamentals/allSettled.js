const promiseOne = new Promise((resolve, reject) =>
    setTimeout(resolve,3000)) 
const promiseTwo = new Promise((resolve, reject) =>
    setTimeout(reject,3000))

/*
Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))
.catch(err => console.log("Error occured", err)) */

// here we are using promise.all() method to run multiple promises at the same time but if one of the promises is rejected then the whole 
// promise.all() will be rejected and it will not run the then() method and it will run the catch() method.

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data)).catch(err => console.log("Something went wrong",err))

// Promise.allSettled() method is used to run multiple promises at the same time and it will not reject the whole promise.allSettled() 
// if one of the promises is rejected. It will run the then() method and it will not run the catch() method.