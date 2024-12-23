function squareOrSquareRoot(array) {
 let num = []

 for (let i = 0; i < array.length; i++) {

  if(Number.isInteger(Math.sqrt(array[i]))){
    num.push(Math.sqrt(array[i]))
    
  }else{
    num.push(array[i] ** 2)
  }
  
 }

  return num ;
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]));