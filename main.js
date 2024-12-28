function squareSum(numbers){
if( numbers.length < 1){
  return 0
}

let result = 0
let squr1 = []
  for (let y = 0; y < numbers.length; y++) {
    squr1.push(numbers[y] ** 2)
    
  }
  for (let i = 0; i < squr1.length; i++) {
    result += squr1[i]
  }
return result


// return numbers.map((x) => {
//   return x ** 2
// }).reduce((x, y) => {
// return x + y
// }, 0)

}

console.log(squareSum([1, 2]));