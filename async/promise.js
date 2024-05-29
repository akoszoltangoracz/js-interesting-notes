const sleep = async (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

const worker1 = async (v) => {
  await sleep(100);
  return `returned ${v}`;
};

const failing = async () => {
  throw new Error('Error from promise');
};

const start = async () => {
  const val = await worker1(1);
  console.log(val);

  const values = await Promise.all([
    worker1(1),
    worker1(2),
    worker1(3),
    worker1(4),
    worker1(5),
  ]);

  console.log(`Values: ${values}`);

  console.log('----------------');
  try {
    console.log(await worker1(1));
    await failing();
    console.log(await worker2(2));
    console.log("won't see this");
  } catch (err) {
    console.log(`Caught: ${err}`);
  } finally {
    console.log('finally');
  }
};

start();
