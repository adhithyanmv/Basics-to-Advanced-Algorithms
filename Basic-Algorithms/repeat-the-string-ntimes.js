//in given string, repeat the string in the first arg as number of times in second arg!
function repeatStringNumTimes(str, num) {
  let word = "";
  for (let i = 0; i < num; i++) {
    word += str;
  }
  return word;
}
repeatStringNumTimes("abc", 3); //abcabcabc
