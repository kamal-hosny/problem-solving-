function addLength(str) {
  //start-here
  return str.split(" ").map((x) => {
    return `${x} ${x.length}`
  })
  }
  
  console.log(addLength("apple ban"));