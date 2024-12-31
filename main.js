function powersOfTwo(n){
  
let num = Array(n+1).fill(0).map((x, i) => {
  return x + i
}).map((x) => {
  return Math.pow(2, x)
})


  return num
}

console.log(powersOfTwo(3));