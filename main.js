function removeChar(str){
  
  let result = []
 
  for (let i = 1; i < str.length -1; i++) {
    result.push(str[i])
    
  }

  return result.join("")

 }; 

 console.log(removeChar("eloquent"));