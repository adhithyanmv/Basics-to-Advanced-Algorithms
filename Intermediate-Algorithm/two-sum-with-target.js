var twoSum = function (nums, target) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] !== target) {
      continue;
    }
    if (nums[i] + nums[i + 1] === target) {
      arr.push(i, i + 1);
    }
  }
  let main = [];

  if (arr.length == 0) {
    for (let i = 0; i < nums.length; i++) {
      let ab = nums[i];
      let ind = i;
      let num = [i];
      for (let j = 0; j < nums.length; j++) {
        if (j !== ind) {
          if (ab + nums[j] === target) {
            num.push(j);
            break;
          }
        }
      }
      if (num.length === 2) {
        main.push(...num);
        break;
      }
    }
  }

  arr.push(...main);
  return arr;
};

// console.log(twoSum([-1, -2, -3, -4, -5], -8));
console.log(twoSum([3, 2, 3], 6));
