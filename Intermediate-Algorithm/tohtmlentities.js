// to html entities
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
function htmlEntities(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");
}

function convertHTML(str) {
  let arr = str.split("");
  let main = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") main += " ";
    if (abc.includes(arr[i])) main += arr[i];
    if (!abc.includes(arr[i]) && arr[i] !== " ") {
      let ab = htmlEntities(arr[i]);
      main += ab;
    }
  }
  console.log(main);
  return main;
}

convertHTML('Stuff in "quotation marks"'); //Stuff in &quot;quotation marks&quot;
convertHTML("Hamburgers < Pizza < Tacos"); //Hamburgers &lt; Pizza &lt; Tacos
convertHTML("Schindler's List"); //Schindler&apos;s List
