function distinct(a) {
    
    let basket = []

    for (let i = 0; i < a.length; i++) {
        if(!basket.includes(a[i])){
            basket.push(a[i])
        }
    }

    return basket
    
  }

  console.log(distinct([1, 2, 1, 1, 3, 2]));