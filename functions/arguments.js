let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

let getTip = function (total, tipPercent = .2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
}

console.log(getTip(50, .25))
console.log(getTip(50))