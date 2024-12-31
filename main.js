function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((x, y) => {
    return x + y
  })
  let count = classPoints.length;
  let average = sum / count
  // Your code here
  if(yourPoints < average) {
    return false
  }else {
    return true
  } 
}

console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));