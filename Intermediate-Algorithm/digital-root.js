// digital root
function digital_root(n) {
  let arr = String(n).split("");
  let sum = 0;
  let mainSum;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  mainSum = String(sum)
    .split("")
    .reduce((curr, prev) => Number(curr) + Number(prev), 0);
  console.log(mainSum);
}
digital_root(493193); //4+9+3+1+9+3 = 29 =2+9 = 11
