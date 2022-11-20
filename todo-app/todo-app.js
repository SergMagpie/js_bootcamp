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

const sumIncompleteTodos = function () {
    let complitedTodos = todos.filter(function (todo) {
        return !todo.completed
    })
    return complitedTodos.length
}

let hideComplited = false

const writeSummary = function () {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${sumIncompleteTodos()} todos left`
    document.querySelector('#summary').appendChild(summary)
}

const writeTable = function () {
    document.querySelector('#table').replaceChildren()
    document.querySelector('#summary').replaceChildren()
    writeSummary()
    todos.forEach(function (todo) {
        const p = document.createElement('p')
        if (!todo.completed) {

            p.textContent = todo.text

        } else {
            if (!hideComplited) {
                const i = document.createElement('s')
                i.textContent = todo.text
                p.appendChild(i)
            }
        }
        document.querySelector('#table').appendChild(p)
    })
    document.querySelectorAll('p').forEach(function (el) {
        el.addEventListener('click', function (e) {
            checkTodo(e.target.textContent)
        })
    })
}
writeTable()

const createNotes = function (e) {
    if (document.querySelector('#input-notes')) {
        document.querySelector('#input-notes').remove()
    }
    const newNote = document.createElement('input')
    const a = document.createAttribute("id");
    a.value = "input-notes";
    newNote.setAttributeNode(a)
    document.querySelector('#table').appendChild(newNote).focus()
    document.querySelector('#input-notes').addEventListener('change', function (e) {
        todos.push({
            text: e.target.value,
            completed: false
        })
        writeTable()
    })
}
const buttonClick = function (e) {
    console.log('button click')
    console.log(e)
}
const checkTodo = function (text) {
    todos.forEach(function (todo) {
        if (todo.text === text) {
            todo.completed = !todo.completed
        }
    })
    writeTable()
}
document.querySelector('#create-notes').addEventListener('click', function (e) {
    createNotes(e)
})
document.querySelector('#delete-all').addEventListener('click', function (e) {
    todos.length = 0
    writeTable()
})
document.querySelector('#hide-complited').addEventListener('click', function (e) {
    hideComplited = e.target.checked
    console.log(hideComplited)
    writeTable()
})
// document.querySelectorAll('p').forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         buttonClick(e.target.textContent)
//     })
// })



// You have 2 todos left (p element)
// Add a p for each todo above (use text value)