//find the intersection elements!
function diffArray(arr1, arr2) {
  const newArr = [];

  if (arr1.length < arr2.length || arr1.length === arr2.length)
    for (let i = 0; i < arr2.length; i++) {
      if (arr2.indexOf(arr1[i]) !== -1) {
        newArr.push(arr1[i]);
      }
    }

  if (arr1.length > arr2.length)
    for (let i = 0; i < arr1.length; i++) {
      if (arr1.indexOf(arr2[i]) !== -1) {
        newArr.push(arr2[i]);
      }
    }
  console.log(newArr);
}

diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
