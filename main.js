function sumMul(n,m){
    
    if (n + m <= 0) {
        return "INVALID"
    }

    let basket = []

    for (let i = n; i < m; i += n) {
        
        basket.push(i)
        
    }
    return basket.reduce((x, y) => x+ y)
    }

    console.log(sumMul(65, 9490));