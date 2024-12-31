function twoSort(s) {
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = 0; j < s.length - i - 1; j++) {
      if (s[j] > s[j + 1]) {
        let temp = s[j];
        s[j] = s[j + 1];
        s[j + 1] = temp;
      }
    }
  }


  let firstWord = s[0];
  

  return firstWord.split('').join('***');
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));

