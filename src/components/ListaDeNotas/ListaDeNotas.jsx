import { Component } from "react";
import './style.css';

import CardNota from "../CardNota";

class ListaDeNotas extends Component {

    constructor() {
        super();
        this.state = {
            notes: []
        };
        this._referenceModifyNote = this._modifyNote.bind(this);
    }

    componentDidMount() {
        this.props.notes.register(this._referenceModifyNote);
    }

    componentWillUnmount() {
        this.props.notes.unregister(this._referenceModifyNote);
    }

    _modifyNote(notes) {
        this.setState({...this.state, notes});
    }

    render() {
        return (
            <ul className="lista-notas">
                {this.state.notes.map((note, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota
                                title={note.title}
                                note={note.note}
                                category={note.category}
                                index={index}
                                cleanNote={this.props.cleanNote}
                            />
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;
