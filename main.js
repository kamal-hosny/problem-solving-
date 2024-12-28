var summation = function (num) {

  return Array.from({length: num}, (_, i) => i + 1).reduce((x, y) => {
    return x + y
  })
}

console.log(summation(3));