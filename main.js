function rentalCarCost(d) {
  const price = 40 * d;

  if (d >= 7) {
    return price - 50; 
  } else if (d >= 3) {
    return price - 20; 
  } else {
    return price; 
  }
}

console.log(rentalCarCost(7));
