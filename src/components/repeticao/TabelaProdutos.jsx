import React from 'react'
import produtos from '../../data/produtos.js'
import '../layout/ListaProdutos.css'

export default props => {
    const listaDeProdutos = produtos.map((produto, i) => {
        return (
                <tr key={produto.id} className={i % 2 == 0 ? 'Par' : 'Impar'}>
                    <td> { produto.id } </td>
                    <td> { produto.nome } </td>
                    <td> { produto.preco } </td>
                </tr>
        );
    });

    return (
        <div>
            <h2>#07 - Componente Tabela de Produtos</h2>
            <h3>Desafio de Repetição</h3>
            <div class="TabelaProdutos">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Produto</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        { listaDeProdutos }
                    </tbody>
                </table>
            </div>
        </div>
    )
}