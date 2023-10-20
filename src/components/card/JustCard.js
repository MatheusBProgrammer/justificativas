import React, { useContext, useEffect, useState } from "react";
import styles from "./JustCard.module.css";
import { FaTrash } from "react-icons/fa";

function JustCard({ id, data, justificativa, deletar }) {
  function deletando(id) {
    deletar(id);
  }
  return (
    <div className={styles.card}>
      <div className={styles.data}>
        <div className={styles.chave_data}>Data</div>
        <div className={styles.valor_data}>{data}</div>
      </div>
      <div className={styles.justificativa}>
        <div className={styles.chave_justificativa}>Justificativa</div>
        <div className={styles.valor_justificativa}>{justificativa}</div>
      </div>
      <div className={styles.botao}>
        <button onClick={deletando}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default JustCard;
