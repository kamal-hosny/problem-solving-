function numberToString(num) {
  if(typeof num === "number" ) {
    return num.toString()
  }
}

console.log(numberToString(123));