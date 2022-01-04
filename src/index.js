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
      tituloComponente="#02 Componente"
      nomeAluno="Pedro"
      notaAluno={8}
    />
  </div>,
   el
)
