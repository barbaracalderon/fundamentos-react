import React from 'react'

export default props => {
    const gerarIdade = () => parseInt(Math.random() * (40)) + 40
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>
                <p>Filho:</p>
                <button onClick={e => 
                        props.quandoClicar('João', gerarIdade(), gerarNerd())
                }>Fornecer informações</button>
            </div>
        </div>
    )
}