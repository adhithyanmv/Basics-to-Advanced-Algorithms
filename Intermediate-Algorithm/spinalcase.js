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

function spinalCase(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (abc.includes(str[i].toLowerCase())) arr.push(str[i]);
    if (!abc.includes(str[i].toLowerCase())) arr.push(" ");
  }
  let mainMain = [];
  let main = arr.join("").split(" ");
  for (let i = 0; i < main.length; i++) {
    mainMain.push(main[i][0].toUpperCase() + main[i].slice(1));
  }

  const splitted = mainMain.join("").match(/[A-Z][a-z]+/g);
  console.log(splitted);

  let finalMain = [];

  for (let i = 0; i < splitted.length; i++) {
    finalMain.push(splitted[i].toLowerCase());
  }
  return finalMain.join("-");
}
spinalCase("This Is Spinal Tap");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");
