function basicOp(operation, value1, value2){
  //Code
  switch (operation) {
    case "+" :
      return value1 + value2
      break;
      case "-" :
        return value1 - value2
        break;
      case "*" :
        return value1 * value2
        break;
      case "/" :
        return value1 / value2
        break;
    default:
      break;
  }
  return clac ;
}

console.log(basicOp('-', 4, 7));