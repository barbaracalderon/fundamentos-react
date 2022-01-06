import React, { Component } from 'react'
import "./Contador2.css"
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1,
    };

    inc = () => 
        this.setState({
            numero: this.state.numero + this.state.passo,
        });

    dec = () => 
        this.setState({
            numero: this.state.numero - this.state.passo,
        });

    setPasso = (novoPasso) =>
        this.setState({
            passo: novoPasso,
        });
    

    render() {
        return (
            <div className="Contador2">
                <h2>#14 - Componente Contador 2</h2>
                <h3>display + passoForm + botoes </h3>
                <Display numero={this.state.numero} />
                <div>
                    <PassoForm passo={this.state.passo}  setPasso={this.setPasso}/>
                </div>
                <div>
                    <Botoes setInc={this.inc} setDec={this.dec} />
                </div>

            </div>
        )
    }
}

export default Contador