import { Component } from 'react';
import './style.css';

class ListaDeCategorias extends Component {

    _handleEventInput(ev) {
        if (ev.key === 'Enter' && ev.target.value.length > 0) {
            this.props.addCategory(ev.target.value);
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categories.map((category, index) => {
                        return <li className="lista-categorias_item" key={index}>{category}</li>;
                    })}
                </ul>
                <input
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;