// Create Web Server

const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!!\n');
});
server.listen(port, () => {     
    console.log(`Server running at http://localhost:${port}/`);
});
// This is a simple web server that listens on port 3000 and responds with "Hello World!!" to any request






















