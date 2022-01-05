import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {

    let [nome, setNome] = useState('?')
    let [idade, setIdade] = useState(0)
    let [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
        console.log(nome, idade, nerd)
    }

    return (
        <div>
            <h2>#11 - Componente Filho -> Pai </h2>
            <h3>Comunicação Indireta</h3>
            <p>Pai:</p>
            <span>{nome} </span>
            <span>{idade} </span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'} </span>
            <IndiretaFilho quandoClicar={fornecerInformacoes}> </IndiretaFilho>
        </div>
    )
}