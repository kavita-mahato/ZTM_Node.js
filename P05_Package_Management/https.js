const {send} = require('./request');
const {read} = require('./response');
const {REQUEST_METHOD} = require('./request');

function makeRequest(url,data){
    send(url,data);
    return read();
}

const responseData = makeRequest('http://google.com','hello');
console.log(responseData);

// console.log(require.cache);