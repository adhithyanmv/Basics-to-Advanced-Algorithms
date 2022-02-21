//unique words or arrays or integers or whatever... no duplicates at same time
var uniqueInOrder = function (iterable) {
  let main = [];
  if (typeof iterable === "string") {
    let arr = iterable.split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) {
        main.push(arr[i]);
      }
    }
  }

  if (Array.isArray(iterable)) {
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== iterable[i + 1]) {
        main.push(iterable[i]);
      }
    }
  }
  return main;
};
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
