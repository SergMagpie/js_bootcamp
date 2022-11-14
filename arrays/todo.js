const todos = ['1 todo', '2 todo', '3 todo', '4 todo', '5 todo', '1 todo']

// todos.splice(2, 1)
// todos.push('my todo')
// todos.shift()

// console.log(`You have ${todos.length} todos!`)
// todos.forEach((item, index) => {
//     console.log(`${index + 1}. ${item}`)    
// })
let convert = function (array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
        res.push({ number: i, name: array[i] })
    }
    return res
}
let arrayObjects = convert(todos)

let print = function (arrayObjects) {
    for (let i in arrayObjects) {
        console.log(arrayObjects[i])
    }
    console.log('')
}
let remove = function (name) {
    for (let i in arrayObjects) {
        if (arrayObjects[i].name.toLowerCase() === name.toLowerCase()) {
            delete arrayObjects[i]
        }

    }
}
print(arrayObjects)

remove('1 tOdO')

print(arrayObjects)
