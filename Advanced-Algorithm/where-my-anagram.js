function search(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) return i;
  }
  return -1;
}

var searchInsert = function (nums, target) {
  if (search(nums, target) == -1) {
    for (let i = 0; i < nums.length; i++) {
      if (i == nums.length - 1) return nums.length;
      if (nums[i + 1] > target) return i + 1;
    }
  } else {
    let n = search(nums, target);
    console.log(n);
  }
};

console.log(searchInsert([1, 3, 5, 6], 7));
