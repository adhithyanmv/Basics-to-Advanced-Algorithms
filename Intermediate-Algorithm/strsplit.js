//split strings
// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the
// missing second character of the final pair with an underscore ('_').
function solution(str) {
  let arr = str.split("");
  let main = [];
  let abc = "";
  let us = "_";
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    abc += arr[i];
    if (abc.length === 2) {
      main.push(abc);
      abc = "";
    }
    if (abc.length !== 2 && i === arr.length - 1) {
      abc += us;
      main.push(abc);
      abc = "";
    }
  }
  if (main[main.length - 1] === us) {
    main.pop();
  }
  console.log(main);
}
solution("abc"); //['ab', 'c_'];
