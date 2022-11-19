const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    if (todo.completed) {
    p.textContent = todo.text
} else {
    const i = document.createElement('i')
    i.textContent = todo.text
    p.appendChild(i)
}
    document.querySelector('body').appendChild(p)
})

const buttonClick = function (e) {
    console.log('button click')
    console.log(e)
}
document.querySelector('#create-notes').addEventListener('click', function (e) {
    buttonClick(e)
})
document.querySelector('#delete-all').addEventListener('click', function (e) {
    buttonClick(e)
})

// You have 2 todos left (p element)
// Add a p for each todo above (use text value)