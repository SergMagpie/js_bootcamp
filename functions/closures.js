const createTipper = (tip) => {
    return (sum) => {
        return sum * tip / 100
    }
}

const checkTip = createTipper(10)

console.log(checkTip(50))
console.log(checkTip(100))
console.log(checkTip(500))