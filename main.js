function position(letter){
  //Write your own Code!

  const findNum = letter.toLowerCase().charCodeAt(0) - 97 + 1
  
  return `Position of alphabet: ${findNum}`
}

console.log(position("z"));