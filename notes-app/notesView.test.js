/**
 * @jest-environment jsdom
 */

const fs = require('fs')

const TodoListModel = require('./todoListModel')
const NotesView = require('./notesView')
const { createPublicKey } = require('crypto')

describe('adding notes', () => {
    it('adds 2 notes', () => {

        document.body.innerHTML = fs.readFileSync('./index.html')
        const model = new TodoListModel()
        const view = new NotesView(model)

        model.addNote('First note')
        model.addNote('second note')

        view.displayNotes()

        expect(document.querySelectorAll('div.note').length).toEqual(2)
    })

    it('adds 2 notes', () => {

        document.body.innerHTML = fs.readFileSync('./index.html')
        const model = new TodoListModel()
        const view = new NotesView(model)

        const inputEl = document.querySelector('#username-input')
        const buttonEl = document.querySelector('#note')
        inputEl.value = 'something'
        buttonEl.click()

        expect(document.querySelectorAll('div.note').length).toEqual(1)
    })

    it('clears notes', () => {

        document.body.innerHTML = fs.readFileSync('./index.html')
        const model = new TodoListModel()
        const view = new NotesView(model)

        const inputEl = document.querySelector('#username-input')
        const buttonEl = document.querySelector('#note')
        inputEl.value = 'something'
        buttonEl.click()
        inputEl.value = 'somethingelse'
        buttonEl.click()
        inputEl.value = 'somethingelsex2'
        buttonEl.click()

        expect(document.querySelectorAll('div.note').length).toEqual(3)
    })
})



