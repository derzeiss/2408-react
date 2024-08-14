/** 03 map() */
function task3() {
  function transformOToObjects(nums) {
    return nums.map((n) => ({ val: n }));
  }

  console.log(transformOToObjects([1, 2, 3, 4]));
}
