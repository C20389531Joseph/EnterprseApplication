const http = require('http');
// Create a server instance
const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Send response body
    res.end('Hello World!');
    });
    // Start listening on port 3000
    server.listen(3000, () => {
    console.log('Server listening on port 3000');
    });