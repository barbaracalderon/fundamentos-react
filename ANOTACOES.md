# ANOTAÇÕES GERAIS

## Powershell 

### `npx`
Esse é um comando que se encarrega de uma **dependência temporária**. Ele executa o comando e depois exclui a própria dependência. O `npx` não instala de forma global a dependência e sim **de forma local e temporária**.

### `npx create-react-app "nome-do-projeto"`
### `cd "nome-do-projeto" `
### `npm start`

Entre na pasta do projeto e execute o comando acima mencionado. Ele vai rodar o build e inicializar a aplicação. 

## No VSCode
O React é uma "single page application". Isso significa que nós trabalhamos no arquivo index.js... e é nele que injetamos tudo que precisamos para a nossa aplicação funcionar. 

Além da pasta public, tem também a pasta src. 

Nós deletamos tudo que tinha na pasta src para começar do zero. 

## Sintaxe JSX
Nós precisamos usar a sintaxe JSX para funcionar. Eu preciso do import do React. Essa sintaxe não é uma string. Ela é tipo uma combinação entre HTML + Javascript. Assim, existe a capacidade de usar HTML dentro do contexto do Javascript. 

Nós vamos trabalhar com componentes funcionais (a partir de funções), mas dá pra fazer tudo por classe também. 

Normalmente, o método mais usado é o funcional.

## Padronizações (#01)
### Subpastas
Precisamos criar uma pasta chamada components. Dentro dela, tem várias subpastas porque vamos criar muitos componentes. A primeira subpasta vai se chamar "basicos"... e outras subpastas virão. 

### Nomenclatura
A convenção é usar nome de arquivo com letra maiuscula: `Componente.jsx`

### `export default`
É preciso exportar o componente para que ele possa ser lido por outros.

Primeiro, cria-se uma função... que vai retornar um valor textual. Eu preciso que essa função fique disponível para ser usada: por isso eu preciso exportar. A convenção é usar `export default function nomeFuncao() { };`

### import 

Lá no index.js, "single page application", precisa colocar assim: `import nomeFuncao from './components/basicos/nomeFuncao;'`

Agora eu posso usar isso como se fosse uma tag de HTML: `<nomeFuncao></nomeFuncao>`

Agora nós podemos usar nomeFuncao como se fosse uma espécie de tag HTML. O nome depende do nome que usamos para fazer a importação. 

## Passar Parâmetros para um Componente (#02)
A extensão .jsx é importante pra IDE ajudar você a completar algo, mas do ponto de vista do React mesmo, **não tem diferença entre `.jsx` e `.js`**.

As propriedades de um objeto são somente do tipo leitura. Por isso, tu precisa usar outras estruturas (como Estado) para que ele manipule os dados pra ti: assim, os dados dos componentes vão evoluindo. 

## Erros de Componentes Adjacentes (#03)
É preciso no `return` da função (do componente) utilizar uma `<div></div>` para encapsular todas as tags e javascript. Outra opção é `<></>`. Tem uma pequena diferença entre eles.


## Exportar função anônima com `export default`

Com o export default, eu posso retornar função anônima... mas se eu retiro, preciso nomear a função. 

## Formatar código 
Para formatar o código, aperte no VSCode: `alt + shift + F`

## className
Não se usa 'class' no HTML do React. Se usa **className**.

Assim tu consegue manipular via CSS e estilizar.

## `props.children` (#06)

`Card.jsx -> { props.children }` 

Com isso acima, é possível aninhar componentes uns dentro dos outros via comunicação direta.

## Componentes família (#07)

Para passar dado de pai para filho: 

Precisa do spreading... porque não é automático. Quando tu usa o spreading, tu passas todos os atributos dentro do array. Todos. E precisa usar o spreading porque não é automático essa passagem de dados. 

### Atenção: `{ { } }`

O primeiro par de chaves acessa o Javascript.

O segundo par de chaves é o objeto. 

É preciso explicitar essa passagem do pai para o filho. 

## `.map()` pode funcionar como iteração

Obseve:

```javascript
const listaDeAlunos = alunos.map((aluno) => {
	return (
		algo		//repetição aqui
	);
});
```

O `listaDeAlunos` é uma nova lista a partir de alunos.

## Comunicação Direta
É a comunicação de um componente pai -> filho.

 A comunicação direta **acontece via `props`**.

## Comunicação Indireta
O pai envia uma função via props para o filho. 


o filho recebe essa função que vai ser ativada quando algo acontecer.


O filho passa o dado via função callback para o pai.

Para gerar impacto na tela é preciso alterar o estado (state).

## Estado `{ useState }`
**Não dá pra mudar um componente a partir da interface.**

É preciso, primeiro, mudar o estado dele -> isso afeta os dados. 

Depois é que muda o componente. 

Essa mudança resulta na alteração da interface. 

### O caminho é unidirecional: `estado altera interface`

O estado (dados) -> interface. 

`'onChange={funcaoNome}'`

### Fim.

Chegamos ao fim das anotações.
