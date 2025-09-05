const request = require('./request'); // . represents current folder
const response = require('./response');

function makeRequest(url, data){
    request.send(url, data);
    return response.read();
}

const responseData = makeRequest('https://www.google.com','Hello');
console.log(responseData);