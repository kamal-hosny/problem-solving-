function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array

  if(marks.length === 0) {
    return 0
  }

  let Sum = marks.reduce((x , y) => {
    return x + y
  })
  let Count = marks.length
  let Average = Sum / Count  

  return Math.floor(Average)

}

console.log(getAverage([1,5,87,45,8,8]));