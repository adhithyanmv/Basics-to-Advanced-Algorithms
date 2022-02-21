//find the parity outlier
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  let even = [];
  let odd = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      even.push(integers[i]);
    }
    if (Math.abs(integers[i] % 2) == 1) {
      odd.push(integers[i]);
    }
  }

  if (even.length > odd.length) return odd[0];
  if (even.length < odd.length) return even[0];
}
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); //160
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); //11
