function reverseWords(str){
  
  return str.trim().split(" ").reverse().join(" ")
}

console.log(reverseWords("hello world!"));