// max consecutive ones
var findMaxConsecutiveOnes = function (nums) {
  let num = 0;
  let testNum = 0;
  for (let i = 0; i < nums.length; i++) {
    testNum += nums[i];
    if (nums[i] === 0 || i === nums.length - 1) {
      if (testNum > num) {
        num = testNum;
      }
      testNum = 0;
    }
  }
  return num;
};
findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]); //3
findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]); //2
