const arr = [1, 2, 3, 4, 5];

console.log('---- concat arrays ----');
const concatenated1 = [...arr, 6, 7, 8];
console.log(concatenated1);

const arr2 = [9, 10, 11];
const concatenated2 = [...arr, ...arr2];
console.log(concatenated2);

console.log('---- foreach ----');
arr.forEach(console.log);

console.log('---- filter & map ----');
const res = arr
  .filter(e => e % 2)
  .map(e => e * 10);
console.log(res);

console.log('find');
const found = arr.find(e => null);
console.log(found);

console.log('---- for of ----');
for (const e of arr) {
  console.log(e);
}

console.log('---- for in ----');
for (const e in arr) {
  console.log(e, JSON.stringify(e), typeof e);
}

console.log('---- for in with object ----');
const obj = {a: 1, b: 2};
for (const e in obj) {
  console.log(e, JSON.stringify(e), typeof e);
}

console.log('---- Object.keys ----');
for (const e of Object.keys(obj)) {
  console.log(e, JSON.stringify(e), typeof e);
}

console.log('---- map ----');
const mapper = (elem, idx) => `elem ${elem} index ${idx}`;
const mapped = arr
  .map(mapper);
console.log(mapped);

console.log('---- key assignment ----');
const simpleObj = {a: 1, b: 2};
simpleObj.key1 = 'key 1';
simpleObj['fancy key'] = 'key 1';
console.log(simpleObj);

console.log('---- assignment to key ----');
const keyToUse = 'key';
const assigned = {
  a: 1,
  b: 2,
  [keyToUse]: 'value'
};
assigned[keyToUse] = 'value';
console.log(assigned);

console.log('---- base upon another object ----');
const baseObj = { a: 1, b: 2 };
const newObj = {
  ...baseObj,
  c: 3,
};

console.log(newObj);

console.log('---- partially overwrite another object ----');
const baseObj2 = { a: 1, b: 2, c: 0 };
const overwritterObj = {
  ...baseObj,
  c: 3,
};

console.log(overwritterObj);

console.log('---- safe navigation ----');
const bigObj = {
  a: 1,
  b: 2,
  inside: {
    c: 1,
  },
};

console.log(`inside c: ${bigObj.inside.c}`);
console.log(`inner c: ${bigObj?.inner?.c}`);
