const quarterOf = (month) => {
  // Your code here

  if (!month < 1 || month > 12) {
    return Math.ceil(month / 3)
  }

}
console.log(quarterOf(1))