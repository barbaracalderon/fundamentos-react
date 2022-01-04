import React from 'react';

export default function Aleatorio(props) {
    const valorMax = props.max;
    const valorMin = props.min;
    const valorAleatorio = Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMin;
    return (
    <>
      <h2>#05 - Valor aleatório</h2>
      <p>O número aleatório é: <strong> { valorAleatorio } </strong></p>
    </>
    )
}

