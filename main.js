function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let basket = []

  for (let i = 0; i < birds.length; i++) {
    if(!geese.includes(birds[i])){
      basket.push(birds[i])
    }
    
  }
return basket
  // return an array containing all of the strings in the input array except those that match strings in geese
};

console.log(gooseFilter( ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));