//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
  let arr = str.split(" ");
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    let abc = " " + arr[i][0].toUpperCase();
    let ac = arr[i];
    for (let j = 1; j < ac.length; j++) {
      let bb = ac[j].toLowerCase();
      abc += bb;
    }
    res += abc;
  }
  const main = res.replace(" ", "");
  return main;
}

titleCase("I'm a little tea pot");
