const fs = require('fs');

const startStream = () => {
  const stream = fs.createReadStream('./example.txt', 'utf8');
  stream.on('data', data => {
    console.log(`received: ${data}`);
  });

  stream.on('end', () => {
    console.log('stream ended');
  });
};

const startPipe = () => {
  try {
    fs.unlinkSync('./out.txt');
  } catch (err) {
    console.log('cannot delete file');
  }

  const readStream = fs.createReadStream('./example.txt', 'utf8');
  const writeStream = fs.createWriteStream('./out.txt', 'utf8');
  readStream.pipe(writeStream);
};

startStream();
startPipe();
