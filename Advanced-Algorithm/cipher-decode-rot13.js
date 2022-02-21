// cipher decode!
let inp = [
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
let out = [
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
];

function rot13(str) {
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (!inp.includes(str[i].toLowerCase()) && str[i] !== " ") word += str[i];
    if (typeof str[i] === "string" && str[i] !== " ") {
      word +=
        out[inp.indexOf(str[i].toLowerCase())] === undefined
          ? ""
          : out[inp.indexOf(str[i].toLowerCase())];
    } else if (str[i] === " ") {
      word += " ";
    }
  }
  return word.toUpperCase();
}
console.log(rot13("SERR CVMMN!")); //FREE PIZZA!
