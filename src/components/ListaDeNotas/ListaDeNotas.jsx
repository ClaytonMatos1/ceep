import { Component } from "react";
import CardNota from "../CardNota";
import './style.css';

class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {this.props.notes.map((note, index) => {
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
