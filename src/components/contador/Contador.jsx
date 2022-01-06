import React, { Component } from 'react'
import "./Contador.css"

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

    setPasso = (e) =>
        this.setState({
            passo: +e.target.value,
        });
    

    render() {
        return (
            <div className="Contador">
                <h2>#13 - Componente Contador</h2>
                <h3>class Contador extends Component </h3>
                <h1>{ this.state.numero } </h1>
                <label htmlFor="passoInput">Escolha o passo: </label>
                <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso} />
                <div>
                    <button onClick={ this.dec }> - </button>
                    <button onClick={ this.inc }> + </button>
                </div>

            </div>
        )
    }
}

export default Contador