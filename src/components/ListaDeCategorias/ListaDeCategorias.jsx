import { Component, createRef } from 'react';
import './style.css';

class ListaDeCategorias extends Component {

    constructor() {
        super();
        this.state = {
            categories: []
        };
        this.referenceModifyCategoriesByList = this._modifyCategoriesByList.bind(this);
        this.refCategory = createRef();
    }

    componentDidMount() {
        this.props.categories.register(this.referenceModifyCategoriesByList);
    }

    componentWillUnmount() {
        this.props.categories.unregister(this.referenceModifyCategoriesByList);
    }

    _modifyCategoriesByList(categories) {
        this.setState({...this.state, categories});
    }

    _handleEventInput(ev) {
        if (ev.key === 'Enter' && ev.target.value.length > 0) {
            this.props.addCategory(ev.target.value);
            this._cleanInput();
        }
    }

    _cleanInput() {
        this.refCategory.current.value = '';
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categories.map((category, index) => {
                        return <li className="lista-categorias_item" key={index}>{category}</li>;
                    })}
                </ul>
                <input
                    type="text"
                    className="lista-categorias_input"
                    ref={this.refCategory}
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;