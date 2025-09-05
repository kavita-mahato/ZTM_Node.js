// HTTP Request
// HTTP Request is a way to send a request to a server and get a response.
//.on() is a method that is used to listen for events.
//.end() is a method that is used to end the request.
//.request() is a method that is used to create a request.
//.res.on() is a method that is used to listen for events on the response.

// const http = require('https');  // for secure request
// const http = require('http');  
// const {request} = require('https'); // modern ecma script syntax used for destructuring
const {get} = require('https'); // Conenience function (only to get data from  server not for sending )

// http.request is not used in modern ecma script syntax
//request function doesn't need to prefixed with http (http.request)
const req = get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data');
    });
});

// req.end(); // not used when using get() function