//move the zeroes to the end and continue the order
var moveZeros = function (arr) {
  let newArr = [];
  let zeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i]);
    }
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    }
  }
  return newArr.concat(zeros);
};
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
