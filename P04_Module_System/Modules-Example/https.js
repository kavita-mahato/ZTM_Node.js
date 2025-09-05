// This file uses the .mjs extension to indicate it is an ES6 (ECMAScript 2015) module.
// ES6 modules allow you to import and export code between files using 'import' and 'export' keywords.

// import {send} from './request.mjs';
// import {read} from './response.mjs';

const internals = require('./Internals'); // automatically looks for index.js file
// const {send} = require('./Internals/request.js'); // . represents current folder
// const {read} = require('./Internals/response.js');
// const {REQUEST_TIMEOUT} = require('./Internals/request.js');

function makeRequest(url, data){
    internals.request.send(url, data);
    return internals.response.read();
}

const responseData = makeRequest('https://www.google.com','Hello');
console.log(responseData);

// console.log(require.cache); // shows all cached modules