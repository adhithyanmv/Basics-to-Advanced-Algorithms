//convert to bits and sum!
var countBits = function (n) {
  const bits = (n >>> 0).toString(2);
  const arr = String(bits).split("");
  console.log(arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
};
countBits(1234); //10011010010 ==== 5!
