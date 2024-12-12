function repeatStr (n, s) {
    
    const basket = []

    for (let i = 0; i < n; i++) {
        basket.push(s)
    }

    return basket.join("");
  }

  console.log(repeatStr( 5 , "I" ));