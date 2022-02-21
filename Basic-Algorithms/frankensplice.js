//You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
function frankenSplice(arr1, arr2, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(arr2[i]);
  }
  for (let j = 0; j < arr1.length; j++) {
    result.push(arr1[j]);
  }
  for (let i = n; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  return result;
}

console.log(frankenSplice([1, 2], ["a", "b"], 1)); //['a', 1, 2, 'b'];
