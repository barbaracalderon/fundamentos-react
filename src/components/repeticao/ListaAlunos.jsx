import React from 'react'
import alunos from '../../data/alunos.js'

export default props => {
    const listaDeAlunos = alunos.map((aluno) => {
        return (
                <li key={aluno.id}>
                    { aluno.id }. { aluno.nome } -> { aluno.nota }
                </li>
        );
    });

    return (
        <div>
            <h2>#06 - Componente Lista de Alunos Repetição</h2>
            <ul style={ { listStyle: 'none' } }>
                { listaDeAlunos }
            </ul>
        </div>
    )
}