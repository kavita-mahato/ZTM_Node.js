// This file uses the .mjs extension to indicate it is an ES6 (ECMAScript 2015) module.
// ES6 modules allow you to import and export code between files using 'import' and 'export' keywords.

// import {send} from './request.mjs';
// import {read} from './response.mjs';

const {send} = require('./request.js'); // . represents current folder
const {read} = require('./response.js');
const {REQUEST_TIMEOUT} = require('./request.js');

function makeRequest(url, data){
    send(url, data);
    return read();
}

const responseData = makeRequest('https://www.google.com','Hello');
console.log(responseData);

console.log(require.cache); // shows all cached modules