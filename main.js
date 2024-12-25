function lovefunc(flower1, flower2){
  
  let numStatus1 = flower1 % 2 ;
  let numStatus2 = flower2 % 2 ;

  return numStatus1 !== numStatus2 
}

console.log(lovefunc(1,4));