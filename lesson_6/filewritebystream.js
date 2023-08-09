const fs = require('fs');

const ourReadstream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWritestream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadstream.on('data', (chunk) => {
//     ourWritestream.write(chunk);
// });

ourReadstream.pipe(ourWritestream)