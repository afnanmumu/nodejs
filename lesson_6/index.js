const fs = require('fs');

const ourReadstream = fs.createReadStream(`${__dirname}/bigdata.txt`);
// const ourReadstream = fs.createReadStream(`${__dirname}/bigdata.txt`,'utf8');

ourReadstream.on('data', (chunk) => {
    // console.log(chunk.toString());
    console.log(chunk);
});

console.log('hello')