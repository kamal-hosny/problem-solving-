
function findAverage(array) {
  if(!array || array == [] || array == null || array.length === 0) {
    return 0
  }
  let sum = 0;
  let count = array.length

  for (let i = 0; i < array.length; i++) {
     sum += array[i]
    
  }

  let average = sum / count
  return average
}

console.log(findAverage([1,8,5,4]));