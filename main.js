function grow(x){
  if(x === null || x == 0) {
    return 0
  }
  return x.reduce((x, y) => {
    return x * y
  })
}
console.log(grow([1, 2, 3, 4]));