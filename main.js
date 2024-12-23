function doubleChar(str) {
  return [...str].map((x) => {
    return x + x
  }).join("")
}
console.log(doubleChar("String"));