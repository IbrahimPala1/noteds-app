const TodoListModel = require('./todoListModel')
const NotesView = require('./notesView')

const model = new TodoListModel()
model.addNote("hi")

const view = new NotesView(model)

view.displayNotes()




