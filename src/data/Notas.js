import Nota from "./Nota";

export default class Notas {

    constructor() {
        this.notes = [];
        this._registered = [];
    }

    createNote(title, note, category) {
        const newNote = new Nota(title, note, category);
        this.notes.push(newNote);
        this.notify();
    }

    deleteNote(index) {
        this.notes.splice(index, 1);
        this.notify();
    }

    register(callback) {
        this._registered.push(callback);
    }

    unregister(callback) {
        this._registered = this._registered.filter(call => call !== callback);
    }

    notify() {
        this._registered.forEach(callback => callback(this.notes));
    }
}