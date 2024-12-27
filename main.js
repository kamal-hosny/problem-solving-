

function removeExclamationMarks(s) {
  
  const re = "i"

  let result = []

  for (let i = 0; i < s.length; i++) {
    if(re.includes(s)) {
      result.push(s)
    }
    
  }
  return result


}

console.log(removeExclamationMarks("Hello World!"));