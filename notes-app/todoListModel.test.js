const TodoListModel = require("./todoListModel")

describe("TodoListModel", () => {
    it("returns an empty list of items", () => {
        const model = new TodoListModel();
        expect(model.getNote()).toEqual([])
    })
    it("adds a new item to the list", () => {
        const model = new TodoListModel();
        model.addNote("Cancle subs")
        expect(model.getNote()).toEqual(["Cancle subs"])
    })
    it("adds a new item to the list", () => {
        const model = new TodoListModel();
        model.addNote("Cancle subs")
        model.addNote("Buy groceries")
        expect(model.getNote()).toEqual(["Cancle subs", "Buy groceries"])
    })
    it("clears all items on the list", () => {
        const model = new TodoListModel();
        model.addNote("Cancle subs")
        model.addNote("Buy groceries")
        model.reset();

        expect(model.getNote()).toEqual([])

    })
})

