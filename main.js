// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){

    let busketBad = []
    let busketGood = []

    for (let i = 0; i < x.length; i++) {
        if(x[i] === "good"){
            busketGood.push(x[i])
        }else {
            busketBad.push(x[i])
        }
    }

    switch (true) {
        case busketGood.length === 0:
            return 'Fail!'

        case busketGood.length <= 2:
            return 'Publish!'

        case busketGood.length > 2:
            return 'I smell a series!'
    
        default:
            break;
    }


}

console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad']));