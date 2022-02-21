//checking if the paranthases are valid!
function validParentheses(parens) {
  let arr1 = parens.split("");
  let arr9 = arr1.filter((e) => e === ")");
  let arr0 = arr1.filter((e) => e === "(");
  if (arr0.length === arr9.length) return true;
  else return false;
}
console.log(validParentheses("(())((()())())")); //true
