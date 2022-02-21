//CC numbers are something where we add past 2 numbers and get a new one lmao like
//the start 2 numbers in fib will always be 1, 1 the 3rd number will be 1 + 1 = 2, 4th num will be 1+2 = 3
//and so on and so forth
function sumFibs(num) {
  let fibArr = [1, 1];
  for (let i = 1; i < num; i++) {
    let curr = fibArr[i] + fibArr[i - 1];
    fibArr.push(curr);
  }
  console.log(fibArr.reduce((a, b) => a + b, 0));
}
sumFibs(6); //[1, 1, 2, 3, 5, 8, 13] -> 33
