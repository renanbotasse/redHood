function findLongestWordLength(str) {
   let maiorString = str.split(" ");
    let maiorPalvra = 0;
    for (let i = 0; i < maiorString.length; i++) {
       if (maiorString[i].length > maiorPalvra) {
        maiorPalavra = maiorString[i].length;
       }
    }
    return maiorPalvra;
 
}

  
  console.log(findLongestWordLength("Bolo"));



  /*
  function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}*/