import Base from "./Base";
import Nota from "./Nota";

export default class Notas extends Base {

    constructor() {
        super();
        this.notes = [];
        this.originalNotes = [];
    }

    createNote(title, note, category) {
        const newNote = new Nota(title, note, category);
        this.notes.push(newNote);
        this.originalNotes.push(newNote);
        this.notify();
    }

    deleteNote(index) {
        this.notes.splice(index, 1);
        this.notify();
    }

    filterNotes(type, text) {
        if (text.length > 0) {
            this.notes = this.originalNotes;
            text = text.toLowerCase();
            this.notes = this.notes.filter(note => note[type].toLowerCase().indexOf(text) > -1);
        } else {
            this.notes = this.originalNotes;
        }
        this.notify();
    }

    notify() {
        this._registered.forEach(callback => callback(this.notes));
    }
}