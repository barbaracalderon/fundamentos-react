import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Fragmento />
    <ComParametro
      tituloComponente="#02 - Componente"
      nomeAluno="Pedro"
      notaAluno={8}
    />
    <Primeiro />
  </div>
);

/*
ALTERNATIVA: 
export default function App(props) {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Fragmento />
            <ComParametro
                tituloComponente="#02 - Componente"
                nomeAluno="Pedro"
                notaAluno={8} />
            <Primeiro />

        </div>
    )
}
*/
