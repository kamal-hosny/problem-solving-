function updateLight(current) {
const trafficLight = ["green", "yellow", "red"]
let currentValue = trafficLight.indexOf(current)

let nextValue = (currentValue + 1) % 3 
  return trafficLight[nextValue]
}

console.log(updateLight("red"));

