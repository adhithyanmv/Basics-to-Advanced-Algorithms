// sorted union
function uniteUnique(...arr) {
  let main = [];
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    for (let j = 0; j < curr.length; j++) {
      if (!main.includes(curr[j])) main.push(curr[j]);
    }
  }
  return main;
}
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); //[1, 2, 3, 5, 4, 6, 7, 8]
uniteUnique([1, 2, 3], [5, 2, 1]); //[1, 2, 3, 5]
