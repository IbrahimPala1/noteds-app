class TodoListModel {

    constructor () {
        this.items = []
    }
    getNote () {
        return this.items
    }

    addNote (title) {
        this.items.push(title)
    }
    reset() {
        this.items = []
    }
}
module.exports = TodoListModel