/** 02 Executing Functions Directly & Indirectly */
function task2() {
  function double(n) {
    return n * 2;
  }

  function transform(n, fn) {
    return fn(n);
  }

  console.log(transform(2, double));

  // bonus
  console.log(transform(4, (n) => n * 2));
}
