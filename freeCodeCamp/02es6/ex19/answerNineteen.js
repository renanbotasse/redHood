// Only change code below this line
class Thermostat{
    constructor(Fahrenheit){
        this.Fahrenheit = Fahrenheit
    }
get temperature(){
    return (5/9) * (this.Fahrenheit - 32)
}
set temperature (celsius) {
    this.Fahrenheit = (celsius * 9) / 5 + 32;
}
}
// Only change code above this line

let thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos)
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp)
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp)
