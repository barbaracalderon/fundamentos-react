import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default () => 
    <div id="app">
        <h1>Fundamentos React</h1>
        <Card titulo="Quarto Componente">
            <Aleatorio 
                valorMin={0}
                valorMax={60}
            />
        </Card>
        <Card titulo="Terceiro Componente">
            <Fragmento/>
        </Card>
        <Card titulo="Segundo Componente">
            <ComParametro
            tituloComponente="#02 - Componente ComParâmetro"
            nomeAluno="Pedro"
            notaAluno={8.2} />
        </Card>
        <Card titulo="Primeiro Componente">
            <Primeiro />
        </Card>
    </div>