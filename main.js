function invert(array) {
  return array.map((x) => {
    return -x
  })
}

console.log(invert([1, 2, -3, 4, 5]));