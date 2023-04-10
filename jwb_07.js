function countALoop(word, loop) {
    let repeatedWord = word.repeat(loop);
    let aCount = 0;
    
    for (let i = 0; i < repeatedWord.length; i++) {
      if (repeatedWord[i] === "a") {
        aCount++;
      }
    }
    
    return aCount;
  }
  const word = "aha";
  const loop = 3;
  const result = countALoop(word, loop);
  console.log(result);