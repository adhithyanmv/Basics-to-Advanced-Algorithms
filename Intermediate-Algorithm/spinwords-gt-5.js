//if the word is more than or equal to 5 then reverse it and append with all of them
function spinWords(string) {
  if (!string) return "";
  let arr = string.split(" ");
  let main = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      main += `${arr[i].split("").reverse().join("")} `;
    } else {
      main += `${arr[i]} `;
    }
  }
  main = main.slice(0, -1); //removing the last space!
  return main;
}
spinWords("This is another test");
