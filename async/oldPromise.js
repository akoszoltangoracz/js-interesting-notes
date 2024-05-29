// example docs https://www.npmjs.com/package/ssh2-sftp-client

const oldPromise = (v) => new Promise((resolve, reject) => {
    resolve(`hello ${v}`);
});

const failingOldPromise = () => new Promise((resolve, reject) => {
  reject(new Error('failed'));
});

const runOldPromise = () => {
  oldPromise(1)
  .then(v => {
    console.log(`first returned ${v}`);
    return oldPromise(2);
  })
  .then(v => {
    console.log(`second returned ${v}`);
    return failingOldPromise();
  })
  .then(() => {
    console.log("this won't be called");
  })
  .catch(e => {
    console.log(`failed with ${e}`);
  })
};

const start = async () => {
  const val = await oldPromise();
  console.log(val);

  const values = await Promise.all([
    oldPromise(1),
    oldPromise(2),
    oldPromise(3),
    oldPromise(4),
    oldPromise(5),
  ]);

  console.log(values);

  try {
    await failingOldPromise();
  } catch (err) {
    console.log(err);
  }

  console.log('moving on');
};

// start();
runOldPromise();
