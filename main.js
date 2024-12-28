function isPalindrome(x) {
  let left = x.toLowerCase()
  let right = [...x].reverse().join("").toLowerCase()
  
  // your code here
  if( left === right) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome("aba"));