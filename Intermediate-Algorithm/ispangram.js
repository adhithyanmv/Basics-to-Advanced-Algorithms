// checking if the given string has all alphabets
function isPangram(string) {
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
  let letters = string
    .toLowerCase()
    .split("")
    .filter((e) => e !== " ");
  console.log(letters);
  let valid;

  for (let i = 0; i < abc.length; i++) {
    if (letters.includes(abc[i])) valid = true;
    if (!letters.includes(abc[i])) {
      valid = false;
      break;
    }
  }
  if (valid) return true;
  if (!valid) return false;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"));
