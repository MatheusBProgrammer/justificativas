import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

function Navbar({ user, cpf, ubs }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.blank_space}></div>
      <div className={styles.titulo}>Sistema de Justificativas</div>
      <div className={styles.dados}>
        <div className={styles.user}>{user}</div>
        <div>{ubs}</div>
      </div>
    </div>
  );
}

export default Navbar;
