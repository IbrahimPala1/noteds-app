class NotesView {
    constructor(model) {
        this.model = model 
        this.mainContainerEl = document.querySelector('#main-container')
        this.button = document.querySelector('#note')
        this.button.addEventListener("click", () => {
            this.noteAdd()
            this.displayNotes()
        })
    }
    displayNotes () {
        const notes = this.model.getNote()
        const exisitngNotes = document.querySelectorAll('div.note')
        exisitngNotes.forEach(note => {
            note.remove()
        })

        notes.forEach(note => {
            const noteEl = document.createElement('div')
            noteEl.innerText = note
            noteEl.className = 'note'
            this.mainContainerEl.append(noteEl)
        })
    }
    noteAdd () {
        const inputEl = document.querySelector('#username-input')
        console.log(inputEl.value)
        this.model.addNote(inputEl.value)
        inputEl.value = ("")
    }
}
module.exports = NotesView;