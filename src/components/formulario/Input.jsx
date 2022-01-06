import React, { useState } from 'react'
import "./Input.css"

export default props => {

    const [valor, setValor] = useState('Digite algo')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
        <h2>#12 - Componente Input</h2>
        <h4>[valor, setValor] = useState('Digite algo')</h4>
        <h3>{valor}</h3>
            <input value={valor} onChange={quandoMudar}></input>
        </div>
    )
}