function stringy(size) {
    // your code here  
    let arr = []

    for (let i = 1; i <= size; i++) {
        
        if( i % 2 === 0) {
            arr.push(0)
        }else{
            arr.push(1)
        }
        
        
    }
    
    return arr.join("")
  }
  console.log(stringy(6));