//array destroyer
function destroyer(arr, ...rem) {
  let main = [];

  for (let i = 0; i < arr.length; i++) {
    if (!rem.includes(arr[i])) main.push(arr[i]);
  }
  return main;
}
destroyer([1, 3, 1, 3], 3); //[1, 1]
destroyer([1, 3, 5, 1, 3], 3); //[1, 5, 1];
destroyer(["tree", "hamburger", 53], "tree", 53); //[hamburger]
