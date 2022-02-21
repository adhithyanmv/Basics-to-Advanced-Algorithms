// everything be true
function truthCheck(collection, pre) {
  let tf;
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      tf = false;
      break;
    } else {
      tf = true;
    }
  }
  return tf;
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);
