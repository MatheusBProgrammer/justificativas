import React from "react";
import styles from "./Button.module.css";

function Button({ value, submit }) {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={submit}>
        {value}
      </button>
    </div>
  );
}

export default Button;
