function expressionMatter(a, b, c) {
  let odds = [
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + (b * c),
    (a * b) + c
  ]
  return Math.max(...odds)
}

console.log(expressionMatter(5, 1, 3));