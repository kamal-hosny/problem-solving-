function digitize(n) {
    const arr = []
    let str = String(n)

    for (let i = 0; i < str.length; i++) {
        
        arr.push(Number(str[i]))
    }

    return arr.reverse()
  }

  console.log(digitize(324));