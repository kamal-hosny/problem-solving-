function modifiedSum(a, n) {
    
    let squared = 0
    let total = a.reduce((x, y) =>{
        return x + y
    })
    for (let i = 0; i < a.length; i++) {

        squared += a[i] ** n
        
    }

    let finel = squared - total

    return finel
  }

  console.log(modifiedSum([1, 2, 3], 3));