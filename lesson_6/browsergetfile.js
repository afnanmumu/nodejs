const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myreadstream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');
    myreadstream.pipe(res);
});

server.listen(3000);

console.log('listening on port 3000');
