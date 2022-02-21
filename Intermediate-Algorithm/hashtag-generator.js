//hashtag generator!
function generateHashtag(str) {
  if (!str) return false;

  let string = str.trim().split(" ");
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i]) arr.push(string[i]);
  }
  let tag = "#";
  for (let i = 0; i < arr.length; i++) {
    tag += arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return tag;
}
console.log(generateHashtag("bh hshgsgd hvhsc'dhd hh"));
