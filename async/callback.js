const fs = require('fs');

console.log('---- callback ----');
fs.readFile('./example.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(`first error ${err}`);
    return;
  }

  console.log(`first: ${data.substring(0, 20)}`);

  fs.readFile('./nonexistent.txt', 'utf8', (err, data) => {
    if (err) {
      console.log(`second error ${err}`);
      return;
    }
  
    console.log(`second: ${data.substring(0, 20)}`);
  });
});

console.log('---- wrap into async ----');

const asyncReadFile = (path, options) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
};

const runAsyncReadFile = async () => {
  try {
    const res = await asyncReadFile('./example.txt', 'utf8');
    console.log(res.substring(0, 20));
    await asyncReadFile('./nonexistent.txt');
  } catch (err) {
    console.log(`err from wrapped: ${err}`);
  }
};
runAsyncReadFile();

// https://nodejs.org/api/fs.html#promises-api
console.log('---- built in promise api ----');
const fsPromise = require('fs/promises');

const runBuiltInFsPromise = async () => {
  const res = await fsPromise.readFile('./example.txt', 'utf8');
  console.log(res.substring(0, 20));
};
runBuiltInFsPromise();
