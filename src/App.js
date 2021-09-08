import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import './assets/index.css';
import './assets/App.css';

class App extends Component {

    constructor() {
        super();
        this.notes = [];
        this.state = {
            notes: []
        }
    }

    createNote(title, note) {
        const newNote = {title, note};
        const newArrayNotes = [...this.state.notes, newNote];
        const newState = {
            notes: newArrayNotes
        };
        this.setState(newState);
    }

    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro
                    createNote={this.createNote.bind(this)}
                />
                <ListaDeNotas
                    notes={this.state.notes}
                />
            </section>
        );
    }
}

export default App;
