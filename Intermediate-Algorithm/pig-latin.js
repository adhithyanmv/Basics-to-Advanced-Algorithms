// pig latin
// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.
function translatePigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let tf;
  for (let i = 0; i < vowels.length; i++) {
    if (str[0] === vowels[i]) {
      tf = true;
      break;
    }
  }
  let all = str;

  if (tf) return (all += "way");

  let arr = str.split("");
  let main = "";
  for (let i = 0; i < arr.length; i++) {
    let conses = "";
    if (!vowels.includes(arr[i])) conses += arr[i];
    if (vowels.includes(arr[i])) {
      conses += "ay";
      break;
    }
    main += conses;
  }

  let idk = "";
  for (let i = main.length; i < arr.length; i++) {
    idk += arr[i];
  }
  let mainFr = idk + main + "ay";
  return mainFr;
}
translatePigLatin("schwartz"); //artzschway
translatePigLatin("california"); //aliforniacay
translatePigLatin("algorithm"); //algorithmway
