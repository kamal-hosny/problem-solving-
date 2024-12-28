function findSmallestInt(args) {
  //your code here
  let min = args[0];
  for (let i = 0; i < args.length; i++) {
    min = min < args[i] ? min : args[i]
    
  }
  return min;
}

console.log(findSmallestInt([34, 15, 88, 2]));