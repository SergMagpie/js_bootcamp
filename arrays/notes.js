const notes = ['Note 1', 'Note 2', 'Note 3']

console.log(notes.pop())
notes.push('My new note')
console.log(notes.shift())
notes.unshift('my 1 note')

notes.splice(1, 1, 'new item')

console.log(notes)

for (let count = 0; count <= 2; count++) {
    console.log(`${count + 1}. ${notes[count]}`)
}