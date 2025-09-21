const express = require('express');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        // event loop is blocked
    }
}
app.get('/', (req, res) => {
  res.send('Performance example');
});

app.get('/timer', (req, res) => {
    //delay the response
    delay(6000);
    res.send('Ding Ding Ding!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});