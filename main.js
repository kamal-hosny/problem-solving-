function fakeBin(x){

  let busket = []

  for (let i = 0; i < x.length; i++) {
    if(x[i] >= 5){
      busket.push("1")
    }else{
      busket.push("0")
    }
  }

  return busket.join("")

}

console.log(fakeBin('45385593107843568'));