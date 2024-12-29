function sumMix(x){

  return x.reduce((a, b) => {
    return Number(a) + Number(b)
  }, 0)
}

console.log(sumMix([9, 3, '7', '3']));