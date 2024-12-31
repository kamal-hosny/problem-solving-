function divisibleBy(numbers, divisor){

  let basket = []

  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % divisor == 0){
      basket.push(numbers[i]) 
    }
    
  }

  return basket
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));