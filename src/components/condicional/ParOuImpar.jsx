import React from 'react'

export default props => {
        return (
        <div>
        <h2>#08 - Componente Número Par ou Ímpar</h2>
        <h3>Condicional</h3>
            <p>O número <strong>{props.num}</strong> é... 
            { (props.num % 2 === 0) ? 
                <span> par</span> :
                <span> ímpar</span>
            }
            </p>
        </div>
    )
}