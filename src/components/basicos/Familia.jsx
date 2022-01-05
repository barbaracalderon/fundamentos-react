import React from 'react'
import FamiliaMembro from "./FamiliaMembro"

export default props => {
    return (
        <div>
            <h2>#05 - Componente Família</h2>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Ana" {...props}/>
            <FamiliaMembro nome="Gustavo" sobrenome="Silva"/>
        </div>
    )
}