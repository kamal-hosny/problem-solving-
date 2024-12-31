function correct(string){
	
  return [...string].map((x) => {
    switch (x) {
      case "5":
        return "S"
      case "0":
        return "O"
      case "1":
        return "I"
    
      default :
        return x 
    }
  }).join("")
}

console.log(correct("L0ND0N"));