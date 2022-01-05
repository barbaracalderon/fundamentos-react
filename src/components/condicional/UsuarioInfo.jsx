import React from 'react'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <p>
                <If test={ usuario && usuario.nome } >
                Seja bem-vindo(a) <strong>{ usuario.nome }</strong>!
                </If> 
                
                <If test={ !usuario || !usuario.nome }>
                Seja bem-vindo(a) <strong>colega</strong>! 
                </If>
            </p>
        </div>
    )
}