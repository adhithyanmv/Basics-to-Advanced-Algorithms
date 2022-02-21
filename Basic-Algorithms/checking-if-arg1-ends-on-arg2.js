//check if the first arg ends with the 2nd arg in string!
// abc.slice(abc.length-1)
function confirmEnding(str, target) {
  let res = str.slice(-target.length);
  if (res === target) return true;
  if (res !== target) return false;
}
console.log(confirmEnding("Bastian", "n"));
