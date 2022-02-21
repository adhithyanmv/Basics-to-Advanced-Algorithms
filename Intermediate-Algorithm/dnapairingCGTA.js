//dna pairing(CG TA)
function pairElement(str) {
  let main = [];
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    let nArr = [];
    nArr.push(arr[i]);
    if (arr[i] === "C") nArr.push("G");
    if (arr[i] === "G") nArr.push("C");
    if (arr[i] === "T") nArr.push("A");
    if (arr[i] === "A") nArr.push("T");
    main.push(nArr);
  }
  return main;
}
pairElement("CTCTA");
/*
[['C', 'G']
['T', 'A']
['C', 'G']
['T', 'A']
['A', 'T']]
*/
pairElement("ATCGA");
/*
[['A', 'T']
['T', 'A']
['C', 'G']
['G', 'C']
['A', 'T']]
*/
