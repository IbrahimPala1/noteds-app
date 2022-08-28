(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // todoListModel.js
  var require_todoListModel = __commonJS({
    "todoListModel.js"(exports, module) {
      var TodoListModel2 = class {
        constructor() {
          this.items = [];
        }
        getNote() {
          return this.items;
        }
        addNote(title) {
          this.items.push(title);
        }
        reset() {
          this.items = [];
        }
      };
      module.exports = TodoListModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.button = document.querySelector("#note");
          this.button.addEventListener("click", () => {
            this.noteAdd();
            this.displayNotes();
          });
        }
        displayNotes() {
          const notes = this.model.getNote();
          const exisitngNotes = document.querySelectorAll("div.note");
          exisitngNotes.forEach((note) => {
            note.remove();
          });
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
        noteAdd() {
          const inputEl = document.querySelector("#username-input");
          console.log(inputEl.value);
          this.model.addNote(inputEl.value);
          inputEl.value = "";
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var TodoListModel = require_todoListModel();
  var NotesView = require_notesView();
  var model = new TodoListModel();
  model.addNote("hi");
  var view = new NotesView(model);
  view.displayNotes();
})();
