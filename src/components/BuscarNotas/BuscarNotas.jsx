import { Component } from "react";
import './style.css';

class BuscarNotas extends Component {

    constructor() {
        super();
        this.search = '';
        this.state = {
            typeSearch: ['Título', 'Categoria'],
        }
    }

    componentDidMount() {
        this.search = 'Título';
    }

    _handleChangeType(ev) {
        ev.stopPropagation();
        this.search = ev.target.value;
    }

    _handleChangeSearch(ev) {
        ev.stopPropagation();
        let type = (this.search === 'Título') ? 'title' : 'category';
        this.props.notes.filterNotes(type, ev.target.value);
    }

    render() {
        return (
            <section className="buscar-notas_section">
                <label htmlFor="search">Buscar por:</label>
                <select className="buscar-notas_select"
                    onChange={this._handleChangeType.bind(this)}
                >
                    {this.state.typeSearch.map((type, index) => {
                        return <option key={index}>{type}</option>
                    })}
                </select>
                <input
                    type="text"
                    id="search"
                    ref={this.refCategory}
                    placeholder="Busca"
                    onKeyUp={this._handleChangeSearch.bind(this)}
                />
            </section>
        );
    }
}

export default BuscarNotas;