import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import ListaDeCategorias from './components/ListaDeCategorias';
import './assets/index.css';
import './assets/App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            notes: [],
            categories: ['Trabalho', 'Esporte']
        }
    }

    createNote(title, note, category) {
        const newNote = { title, note, category };
        const newArrayNotes = [...this.state.notes, newNote];
        const newState = {
            notes: newArrayNotes
        };
        this.setState(newState);
    }

    deleteNote(index) {
        let arrayNotes = this.state.notes;
        arrayNotes.splice(index, 1);
        this.setState({
            notes: arrayNotes
        });
    }

    fillCategories(category) {
        const newArrayCategories = [...this.state.categories, category];
        const newState = {
            ...this.state,
            categories: newArrayCategories
        };
        this.setState(newState);
    }

    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro
                    categories={this.state.categories}
                    createNote={this.createNote.bind(this)}
                />
                <main className="conteudo-principal">
                    <ListaDeCategorias
                        categories={this.state.categories}
                        addCategory={this.fillCategories.bind(this)}
                    />
                    <ListaDeNotas
                        notes={this.state.notes}
                        cleanNote={this.deleteNote.bind(this)}
                    />
                </main>
            </section>
        );
    }
}

export default App;
