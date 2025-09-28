const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();

function delay(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    });
}
app.get('/', (req, res) => {
  // JSON.stringify({}) => "{}"
  // JSON.parse("{}") => {}
  // [5,1,2,4,3].sort() => [1,2,3,4,5]
  res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', async (req, res) => {
    //delay the response (non-blocking)
    // Now multiple requests can be handled concurrently by different workers
    // or even by the same worker if it's not busy
    await delay(9000);
    res.send(`Ding Ding Ding! ${process.pid}`);
});

console.log('Running server.js...');
if (cluster.isMaster) {
  console.log('Master has been started...');
  
  // Create multiple workers
  const numCPUs = os.cpus().length;
  console.log(`Creating ${numCPUs} workers...`);
  
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  // Handle worker events
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork(); // Restart the worker
  });
  
} else {
  console.log(`Worker process ${process.pid} started...`);
  app.listen(3000, () => {
    console.log(`Server is running on port 3000 with worker ${process.pid}...`);
  });
}
