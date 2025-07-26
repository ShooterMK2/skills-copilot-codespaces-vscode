// Create Web Server
const http = require('http');

const server = http.createServer((req, res) => {
    // Handle incoming requests
    if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World!!\n');
    } else {
        res.statusCode = 405; // Method Not Allowed
        res.end('Method Not Allowed\n');
    }
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});