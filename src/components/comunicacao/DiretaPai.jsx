import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <h2>#10 - Componente Pai -> Filho </h2>
            <h3>Comunicação Direta</h3>
            <DiretaFilho nome="Gabriel" idade={21} nerd={true}/>
            <DiretaFilho nome="Maria" idade={17} nerd={false}/>
        </div>
    )
}