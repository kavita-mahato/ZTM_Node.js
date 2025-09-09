const path = require('path'); 
// \folder\files.jpg

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
    // res.send('<ul><li>Hello World!</li></ul>');
}

function postMessages(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessages,
};