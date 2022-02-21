//sorting order with number btw words!
function order(words) {
  let mainArr = [];
  let arr = words.split(" ");
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    for (let j = 0; j < curr.length; j++) {
      if (Number(curr[j])) {
        mainArr[Number(curr[j]) - 1] = curr;
      }
    }
  }
  return mainArr.join(" ");
}
order("4of Fo1r pe6ople g3ood th5e the2"); //Fo1r the2 g3ood 4of th5e pe6ople
order("is2 Thi1s T4est 3a"); //Thi1s is2 3a T4est
