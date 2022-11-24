let notes = getSavedNotes()

const filters = {
    searchText: ''
}

const sorters = {
    sorterText: ''
}

renderNotes(notes, filters, sorters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = getId()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timeStringNow(),
        updatedAt: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters, sorters)
})

document.querySelector('#sort-by').addEventListener('change', function (e) {
    console.log(e.target.value)
    sorters.sorterText = e.target.value
    renderNotes(notes, filters, sorters)
})
window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters, sorters)
    }
})

const now = moment()
console.log(now.format('D-MM-YYYY'))
console.log(now.format())
console.log(moment(now.format()))