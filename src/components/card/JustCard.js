import React, { useContext, useEffect, useState } from "react";
import styles from "./JustCard.module.css";

function JustCard({ data, justificativa }) {
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
    </div>
  );
}

export default JustCard;
