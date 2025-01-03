function findMultiples(integer, limit) {
   
    let basket = [];

    for (let i = integer; i <= limit; i+= integer) {
        
        basket.push(i)
        
    }

    return basket
  }
  
  console.log(findMultiples(5, 7));