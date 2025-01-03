// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

function array(string) {
    // TODO
    
    let text = string.split(",")

    if(text.length < 3) {
        return null
    }

    let basket = []

    for (let i = 1; i < text.length -1; i++) {
        
        basket.push(text[i])
        
    }
    return basket.join(" ")
  }

  console.log(array('1,2,3,4'));