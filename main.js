function noBoringZeros(n) {
  if (n === 0) return 0;
 let numArray =  Array.from(String(n), String)


 for (let i = 0; i < numArray.length + 1; i++) {
  if(numArray[numArray.length - 1] == 0) {
    numArray.pop()
  }
 }
 
 return Number(numArray.join(""))

}

console.log(noBoringZeros(50));