import { Component } from "react";
import './style.css';
import { ReactComponent as DeleteSvg } from '../../assets/img/delete.svg';

class CardNota extends Component {
    clean() {
        this.props.cleanNote(this.props.index);
    }
    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.title}</h3>
                    <DeleteSvg
                        className="card-nota_delete"
                        onClick={this.clean.bind(this)}
                    />
                    <h4>{this.props.category}</h4>
                </header>
                <p className="card-nota_texto">{this.props.note}</p>
            </section>
        );
    }
}

export default CardNota;
