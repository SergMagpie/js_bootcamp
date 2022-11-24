const sortNotes = function (notes, sorterText) {
    if (sorterText === 'byEdited') {
        return notes.sort(function (a, b) {
            if (moment(a.updatedAt,'D-MM-YYYY H:m:s') > moment(b.updatedAt,'D-MM-YYYY H:m:s')) {
                return 1
            } else if (moment(a.updatedAt,'D-MM-YYYY H:m:s') < moment(b.updatedAt,'D-MM-YYYY H:m:s')) {
                return -1
            } else {
                return 0
            }
        })
    } else if (sorterText === 'byCreated') {
        return notes.sort(function (a, b) {
            if (moment(a.createdAt,'D-MM-YYYY H:m:s') > moment(b.createdAt,'D-MM-YYYY H:m:s')) {
                return 1
            } else if (moment(a.createdAt,'D-MM-YYYY H:m:s') < moment(b.createdAt,'D-MM-YYYY H:m:s')) {
                return -1
            } else {
                return 0
            }
        })
    } else if (sorterText === 'alphabetical') {
        return notes.sort(function (a, b) {
            if (a.title > b.title) {
                return 1
            } else if (a.title < b.title) {
                return -1
            } else {
                return 0
            }
        })
    } else return notes
}


// Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')
    const dateCreateUpdate = ` - created at ${note.createdAt}, updated at ${note.updatedAt}`

    // Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters, sorters)
    })

    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title + dateCreateUpdate
    } else {
        textEl.textContent = 'Unnamed note' + dateCreateUpdate
    }
    textEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.appendChild(textEl)

    return noteEl
}

// Render application notes
const renderNotes = function (notes, filters, sorters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    const sortedNotes = sortNotes(filteredNotes, sorters.sorterText)

    document.querySelector('#notes').innerHTML = ''

    sortedNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

const getId = function () {
    const notes = getSavedNotes()
    let maxId = 0
    notes.forEach(function (note) {
        if (note.id > maxId) {
            maxId = note.id
        }
    })
    return maxId + 1
}

const timeStringNow = function () {
    return moment().format('D-MM-YYYY H:m:s')
}

