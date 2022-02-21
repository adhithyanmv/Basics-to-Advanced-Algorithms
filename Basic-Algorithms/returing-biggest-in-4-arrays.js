//finding the biggest in 4 arrays and return them as new array!
function largestOfFour(arr) {
  const res = arr.map((e) => {
    return e.reduce((curr, prev) => {
      return curr > prev ? curr : prev;
    });
  });
  return res;
}

const abc = largestOfFour([
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [1000000, 1001, 857, 1],
]);
console.log(abc); //[9, 35, 97, 1000000]
