function arrayPlusArray(arr1, arr2) {
  
  let arr = []

  

  return arr.concat(arr1).concat(arr2).reduce((x, y) => {
    return x + y 
  })
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));