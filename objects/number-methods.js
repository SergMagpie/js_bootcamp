let num = 103.941

console.log(num.toFixed(5))
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

// Generate a random number
let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

let makeGuess = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(makeGuess(33, 44))
console.log(makeGuess(33, 44))
console.log(makeGuess(33, 44))
console.log(makeGuess(33, 44))
console.log(makeGuess(33, 44))
console.log(makeGuess(33, 44))
console.log(makeGuess(33, 44))
console.log(makeGuess(33, 44))
console.log(makeGuess(33, 44))