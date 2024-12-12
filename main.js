function countSheeps(sheep) {
    let conter = 0

    for (let i = 0; i < sheep.length; i++) {
        if(sheep[i]){
            conter ++
        }
        
    }

    return conter
}

console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));