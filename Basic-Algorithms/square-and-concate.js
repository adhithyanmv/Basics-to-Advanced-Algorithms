//square every digit and concate them
function squareDigits(num) {
  let arr = String(num).split("");
  let main = "";
  for (let i = 0; i < arr.length; i++) {
    let abc = Number(arr[i]) * Number(arr[i]);
    main += String(abc);
  }
  let number = Number(main);
  return number;
}
squareDigits(9119);
