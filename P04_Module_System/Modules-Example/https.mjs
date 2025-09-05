// This file uses the .mjs extension to indicate it is an ES6 (ECMAScript 2015) module.
// ES6 modules allow you to import and export code between files using 'import' and 'export' keywords.
import {send} from './request.mjs'; // . represents current folder
import {read} from './response.mjs';

function makeRequest(url, data){
    send(url, data);
    return read();
}

const responseData = makeRequest('https://www.google.com','Hello');
console.log(responseData);