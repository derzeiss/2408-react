/** 01 Destructuring */
let item = ['Egg', 0.25, 12];

// let name = item[0];
// let price = item[1];
// let quantity = item[2];

let [name, price, quantity] = item;

function mergeObjects(a, b) {
  return { ...a, ...b };
}

function mergeObjectsEx(...obj) {
  var merged = {};
  for (let i = 0; i < obj.length; i++) {
    merged = { ...merged, ...obj[i] };
  }
  return merged;
}

const mergeObjectsEx2 = (...objs) => objs.reduce((result, obj) => ({ ...result, ...obj }), {});

const mergedObj = mergeObjectsEx({ a: 1, b: 2 }, { a: 3, c: 4 }, { a: 5, foo: 'bar' });

console.log(mergedObj);
