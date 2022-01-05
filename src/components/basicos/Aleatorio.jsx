import React from 'react';

export default (props) => {
    const { valorMin, valorMax } = props;     // destructuring
    
    const valorAleatorio = Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMin;
    
    return (
    <div>
      <h2>#04 - Componente ValorAleatório</h2>
      <p>Valor mínimo: { valorMin }</p>
      <p>Valor máximo: { valorMax }</p>
      <p>O número aleatório é: <strong> { valorAleatorio } </strong></p>
    </div>
    );
};


/*
export default function Aleatorio(props) {
    const valorMax = props.max;
    const valorMin = props.min;
    const valorAleatorio = Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMin;
    return (
    <>
      <h2>#05 - Valor aleatório</h2>
      <p>Valor mínimo: { valorMin }</p>
      <p>Valor máximo: { valorMax }</p>
      <p>O número aleatório é: <strong> { valorAleatorio } </strong></p>
    </>
    )
}
*/
