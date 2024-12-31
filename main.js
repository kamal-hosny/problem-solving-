function sumStr(a,b) {
  const num1 = a ? Number(a) : 0; 
  const num2 = b ? Number(b) : 0;
  
  const clac = num1 + num2

  return String(clac)
}

console.log(sumStr("4", "5"));