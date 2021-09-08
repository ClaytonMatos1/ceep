import { Component } from "react";
import './style.css';

class CardNota extends Component {
    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.title}</h3>
                </header>
                <p className="card-nota_texto">{this.props.note}</p>
            </section>
        );
    }
}

export default CardNota;
