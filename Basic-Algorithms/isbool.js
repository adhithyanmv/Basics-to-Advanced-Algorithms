//check if it's a boolean value (true or false)
function booWho(bool) {
  if (typeof bool == "boolean") {
    return true;
  } else {
    return false;
  }
}
console.log(booWho([].slice)); //false
