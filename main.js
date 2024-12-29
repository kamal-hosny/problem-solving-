function sum (numbers) {
  if(numbers.length < 1) {
    return 0
  }

  return numbers.reduce((x, y) => {
    return x + y
  })
}

console.log(sum([1, 2, 3]));