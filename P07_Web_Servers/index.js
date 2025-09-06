const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 
        'Content-Type': 'text/plain' 
    });
    res.end(JSON.stringify({
        id: 1,
        name: 'Kavita Mahato',
    }));
});

server.listen(PORT,() => {
  console.log(`Server listening on port ${PORT}...`);
}); // 127.0.0.1 => localhost