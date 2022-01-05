import React from 'react'

export default props => {
    return (
        <div>
            <div>
                <p>Filho:</p>
                <button onClick={e => 
                        props.quandoClicar('João', 53, true)
                }>Fornecer informações</button>
            </div>

        </div>
    )
}