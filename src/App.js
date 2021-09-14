import { Component } from 'react';
import './assets/index.css';
import './assets/App.css';

import Notas from './data/Notas';
import Categories from './data/Categorias';

import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import ListaDeCategorias from './components/ListaDeCategorias';
import BuscarNotas from './components/BuscarNotas';

class App extends Component {

    constructor() {
        super();
        this.notes = new Notas();
        this.categories = new Categories();
    }

    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro
                    categories={this.categories}
                    createNote={this.notes.createNote.bind(this.notes)}
                />
                <main className="conteudo-principal">
                    <BuscarNotas
                        notes={this.notes}
                    />
                    <ListaDeCategorias
                        categories={this.categories}
                        addCategory={this.categories.addCategory.bind(this.categories)}
                    />
                    <ListaDeNotas
                        notes={this.notes}
                        cleanNote={this.notes.deleteNote.bind(this.notes)}
                    />
                </main>
            </section>
        );
    }
}

export default App;
