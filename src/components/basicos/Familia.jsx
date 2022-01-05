import React, { cloneElement } from 'react'

export default props => {
    return (
        <div>
            <h2>#05 - Componente Família</h2>
            {
                React.Children.map(props.children, (child) => {
                    return cloneElement(child, props)
                })
            }
        </div>
    )
}