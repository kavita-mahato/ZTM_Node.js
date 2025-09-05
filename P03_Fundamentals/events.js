const EventEmitter = require('events');
const celebrity = new EventEmitter();

// subscribe to celebrity for Observer 1
celebrity.on('race', (results) => {
    if(results == 'win')
        console.log('Congratulations! You are the best!'); 
})

// subscribe to celebrity for Observer 2 
celebrity.on('race', (results) => {
    if(results == 'win')
        console.log('Boo I cound have better than that!'); 
})

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
})    // 0 for successful execution 

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');