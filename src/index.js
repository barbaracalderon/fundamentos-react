import './index.css'
import ReactDOM from 'react-dom';
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const el = document.getElementById('root')

ReactDOM.render(
  <div>
    <Primeiro/>
    <ComParametro
      titulo="#02 Componente"
      subtitulo="Primeiros passos."
      msg="Estamos usando uma função com parâmetro."
    />
  </div>,
   el
)
