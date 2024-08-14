/** 06 Remove false values from a given array */
function task6() {
  const compact = (arr) => arr.filter((el) => !!el);

  console.log(compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]));
}
