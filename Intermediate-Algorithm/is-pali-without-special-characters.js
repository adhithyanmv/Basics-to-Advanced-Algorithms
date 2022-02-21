// palindrome checking without characters
let abc = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let num = [1, 2, 3, 4, 5, 7, 8, 9, 0];

function palindrome(str) {
  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  let arr = str
    .toLowerCase()
    .split("")
    .filter((e) => isLetter(e) || Number(e))
    .join("");

  console.log(arr);

  let main = "";

  for (let i = arr.length - 1; i >= 0; i--) {
    main += arr[i];
  }

  console.log(main);
  if (arr === main) return true;
  if (arr !== main) return false;
}
palindrome("A man, a plan, a canal. Panama"); //true
palindrome("1 eye for of 1 eye."); //false
