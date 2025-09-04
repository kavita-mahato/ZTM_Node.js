const promise = new Promise((resolve, reject) => {
    if(true){
      resolve('stuff worked');
    }else{
      reject('error, it broke');
    }
})

// promise.then(result => console.log(result))

promise
  .then(result => result + '!')
  .then(result2 => result2 + '?')
  .catch(() => console.log('error!'))
  .then(result3 => {
    console.log(result3 + '!');
})