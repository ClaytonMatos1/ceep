import { Component } from "react";
import './style.css';

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.title = '';
        this.note = '';
    }

    _createCard(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.props.createNote(this.title, this.note);
    }

    _handleChangeTitle(ev) {
        ev.stopPropagation();
        this.title = ev.target.value;
    }

    _handleChangeNote(ev) {
        ev.stopPropagation();
        this.note = ev.target.value;
    }

    render() {
        return (
            <form className="form-cadastro"
                onSubmit={this._createCard.bind(this)}
            >
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handleChangeTitle.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this._handleChangeNote.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;