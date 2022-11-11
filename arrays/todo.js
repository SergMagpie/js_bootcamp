const todos = ['1 todo', '2 todo', '3 todo', '4 todo', '5 todo']

todos.splice(2, 1)
todos.push('my todo')
todos.shift()

console.log(`You have ${todos.length} todos!`)
todos.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`)    
})
