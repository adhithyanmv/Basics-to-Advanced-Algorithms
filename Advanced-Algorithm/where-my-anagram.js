function anagrams(word, words) {
  let main = [];
  let arr = [];
  let mainArr = [];
  for (let i = 0; i < words.length; i++) {
    if (word.length === words[i].length) main.push([...words[i]]);
  }

  for (let i = 0; i < main.length; i++) {
    let tf;
    let curr = main[i];

    for (let i = 0; i < curr.length; i++) {
      if (word.includes(curr[i])) {
        tf = true;
      } else {
        tf = false;
        break;
      }
    }
    if (tf) {
      arr.push(curr);
    }
  }

  let curr = " ";
  for (let i = 0; i < arr.length; i++) {
    let tf;
    let cur = arr[i];
    for (let j = 0; j < word.length; j++) {
      if (cur.includes(word[j])) {
        tf = true;
      } else {
        tf = false;
        break;
      }
    }
    if (tf) {
      curr += cur;
    }
  }

  let lastMainWord = curr
    .split("")
    .filter((e) => e !== ",")
    .join("");

  let lw = chunkSubstr(lastMainWord.replace(" ", ""), word.length);

  function chunkSubstr(str, size) {
    const numChunks = Math.ceil(str.length / size);
    const chunks = new Array(numChunks);

    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[i] = str.substr(o, size);
    }

    return chunks;
  }
  return lw;
}
