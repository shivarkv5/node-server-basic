const http = require('http');


const hostname = process.env.hostname || '0.0.0.0'
const port = process.env.PORT || 3011


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World - Wash your hands');
});

// let port = process.env.PORT;
// if (port == null || port == "") {
//     port = 3011;
// }
server.listen(port, hostname, () => {
    console.log(`Server succesfully running on port ${port}`);
});