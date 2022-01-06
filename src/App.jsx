import './App.css'
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";

export default () => 
    <div id="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="Décimo Terceiro Componente" color="#003">
                <Contador />
            </Card>
            <Card titulo="Décimo Segundo Componente" color="#FC0">
                <Input />
            </Card>
            <Card titulo="Décimo Primeiro Componente" color="#872">
                <IndiretaPai />
            </Card>
            <Card titulo="Décimo Componente" color="#83f">
                <DiretaPai />
            </Card>
            <Card titulo="Nono Componente" color="#1b9">
                <UsuarioInfo usuario={{nome: 'João'}} />
            </Card>
            <Card titulo="Oitavo Coponente" color="#921">
                <ParOuImpar num={18}/>
            </Card>
            <Card titulo = "Sétimo Componente" color="#a38">
                <TabelaProdutos />
            </Card>
            <Card titulo="Sexto Componente" color="#bcf">
                <ListaAlunos />
            </Card>
            <Card titulo="Quinto Componente" color="#87A">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>
            <Card titulo="Quarto Componente" color="#080">
                <Aleatorio 
                    valorMin={0}
                    valorMax={60}
                />
            </Card>
            <Card titulo="Terceiro Componente" color="#00F">
                <Fragmento/>
            </Card>
            <Card titulo="Segundo Componente"  color="#F05">
                <ComParametro
                tituloComponente="#02 - Componente ComParâmetro"
                nomeAluno="Pedro"
                notaAluno={8.2} />
            </Card>
            <Card titulo="Primeiro Componente" color="#FA5">
                <Primeiro />
            </Card>
        </div>
    </div>