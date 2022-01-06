import React, { useState } from 'react'
import "./Mega.css"

export default (props) => {

  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;

    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }

  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return numeros;
  }


  console.log(gerarNumeros(7))

  const [qtde, setQtde] = useState(props.qtde || 6)
  const numerosIniciais = Array(qtde).fill(0);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div className="Mega"> 
      <h2>#15 - Componente Megasena</h2>
      <h3>{ numeros.join('-') }</h3>
      <div>
        <label>Números: </label>
        <input 
        min="4"
        max="9"
        type="number" 
        value={qtde} 
        onChange={ e => 
          setQtde(+e.target.value)
           } />
      </div>
      <button onClick={ e => setNumeros(gerarNumeros(qtde))}>
        Gerar Números
      </button>
    </div>
  );
};
