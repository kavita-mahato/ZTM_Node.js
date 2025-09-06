const {parse} = require('csv-parse');
const fs = require('fs');

const results = [];

fs.createReadStream('kepler_data.csv')
    // pipe is a method that takes a readable stream and turns it into a writable stream
    .pipe(parse({
        comment: '#',
        columns: true, // this will return each row as an javascript object with key value pairs rather than an array of values in a row
    }))
    .on('data', (data) => {
        results.push(data);
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end',() => {
        console.log(results); 
        console.log('done');
    });
// parse();