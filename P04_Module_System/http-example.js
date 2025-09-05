// HTTP Request
// HTTP Request is a way to send a request to a server and get a response.
//.on() is a method that is used to listen for events.
//.end() is a method that is used to end the request.
//.request() is a method that is used to create a request.
//.res.on() is a method that is used to listen for events on the response.

const http = require('http'); 

const request = http.request('http://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data');
    });
});

request.end();