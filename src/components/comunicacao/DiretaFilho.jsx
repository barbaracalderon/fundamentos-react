import React from 'react'

export default props => {
    return (
        <div>
            <div>
                <p>
                    {props.nome}, {props.idade} | { (props.nerd) ? 'Verdadeiro' : 'Falso'}
                </p>
            </div>
        </div>
    )
}