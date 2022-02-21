// us phone number validator with country code
//this one is completely messed up, but it still works...
function telephoneCheck(str) {
  let brack = str.split("").filter((e) => e === ")" || e === "(");
  let min = str.split("-");
  for (let i = 0; i < min.length; i++) {
    if (min[i].length === 1 || min[i].length === 0) return false;
  }
  if (brack.length === 1) return false;
  let newArr = str
    .split("")
    .filter((e) => Number(e) || e === "0")
    .map((e) => Number(e));
  if (newArr.length === 11 && newArr[0] === 1 && str[0] !== "-") return true;
  //prettier-ignore
  let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '(', ')', ' ']
  let final = str.split("");
  for (let i = 0; i < final.length; i++) {
    if (!arr.includes(arr[i])) {
      return false;
    }
  }
  let main2 = str.split("").filter((e) => Number(e) || e === "(" || e === ")");
  if (
    main2[0] === "(" &&
    main2.includes(")") &&
    main2[main2.length - 1] !== ")"
  ) {
    let validate = str
      .split("")
      .filter((e) => Number(e) || e === "0")
      .map((e) => Number(e));

    if (validate.length === 10) return true;
    if (validate.length === 11 && validate[0] === 1) return true;
  }
  if (str[0] === "(" && str[str.length - 1] === ")") return false;
  if (str.includes("(") && !str.includes(")")) return false;
  if (str.includes(")") && !str.includes("(")) return false;
  if (!Number(str[0])) return false;

  let main = str
    .split("")
    .filter((e) => Number(e) || e === "0")
    .map((e) => Number(e));

  if (main.length === 10) return true;
  if (main.length === 11 && main[0] === 1) return true;
  else return false;
}

telephoneCheck("1 (555) 555-5555"); //true
telephoneCheck("1 555 555 5555"); //true
telephoneCheck("1 555)555-5555"); //false
telephoneCheck("0 (757) 622-7382"); //false
telephoneCheck("(6054756961)"); //false
telephoneCheck("-1 (757) 622-7382"); //false
telephoneCheck("(555)555-5555"); //true
telephoneCheck("(555)5(55?)-5555"); //false
telephoneCheck("55 55-55-555-5"); //false
