/*
// ASYNC AWAIT
const movePlayer = (distance, direction) => {
  return new Promise((resolve, reject) => {
    if(true){
      resolve(`You moved ${distance} pixels ${direction}!`);
    }else{
      reject('You did not move!');
    }
  });
}
movePlayer(100, 'Left')
  .then((result) => {
    console.log(result);
    return movePlayer(400, 'Left');
  })
  .then((result) => {
    console.log(result);
    return movePlayer(10, 'Right');
  })
  .then((result) => {
    console.log(result);
    return movePlayer(330, 'Left');
  })
  .then((result) => {
    console.log(result);
  });

async function playerStart(){
  // await keyword waits for the promise to resolve
  const first = await movePlayer(100, 'Left'); // pause
  console.log(first);
  const second = await movePlayer(400, 'Left'); // pause
  console.log(second);
  const third = await movePlayer(10, 'Right'); // pause
  console.log(third);
  const fourth = await movePlayer(330, 'Left'); // pause
  console.log(fourth);
} // syntactic sugar

// Call the async function to see the await version in action
console.log("\n--- Running async/await version ---");
playerStart();
*/
/*
async function fetchUsers(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
} 
*/

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]
Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
  .then(array => {
    console.log('users', array[0]);
    console.log('posts', array[1]);
    console.log('albums', array[2]);
  }).catch('oops');

const getData = async function(){
  try{
    const [users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch {
    console.log('oops');
  }
}
