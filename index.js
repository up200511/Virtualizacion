const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);

  res.end('Hola Luisille');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running on port 3000');
});
