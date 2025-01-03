function sayHello( name, city, state ) {

    let names = name.map((x) => {
        return x
    })
    
    return `Hello, ${names.join(" ")}! Welcome to ${city}, ${state}!`

}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));