const REQUEST_TIMEOUT = 500;
// module.exports.REQUEST_TIMEOUT = 500; // for exporting a single property

function encrypt(data){
    return 'encrypted data';
}

function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`Sending ${encryptedData} to ${url}`);
}

export{
    REQUEST_TIMEOUT,
    send,
}