function sumArray(array) {
    if (!Array.isArray(array) || array.length <= 2) {
        return 0
    }

    array.sort((a,b)=> a - b)
    array.shift()
    array.pop()
    let sum = array.reduce((acc, num) => acc + num, 0)
    return sum

}

console.log(sumArray([6, 2, 1, 8, 10]));