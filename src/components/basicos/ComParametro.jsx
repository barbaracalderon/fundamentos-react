import React from "react";

export default function ComParametro(props) {
  const status = props.notaAluno >= 7 ? "aprovado" : "em recuperação";
  return (
    <div>
      <h2>{props.tituloComponente}</h2>
      <p>
        Nosso aluno se chama
        <strong> {props.nomeAluno} </strong>e tirou nota
        <strong> {props.notaAluno}</strong>.
      </p>
      <p>Ele está aqui com situação {status}!</p>
    </div>
  );
}
