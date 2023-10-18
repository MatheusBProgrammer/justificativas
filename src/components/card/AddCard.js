import React, { useContext, useState } from "react";
import styles from "./AddCard.module.css";
import { IoIosAdd } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../context/AuthContext";

function AddCard({ buttonSubmit }) {
  const [justify, setJustify] = useState({ date: "", text: "" });
  const idjust = uuidv4();

  function handleOnChange(e) {
    setJustify({ ...justify, [e.target.id]: e.target.value });
    console.log(justify);
  }

  function submit(e) {
    e.preventDefault();

    const dataToSubmit = { ...justify, id: idjust };

    buttonSubmit(dataToSubmit);
    setJustify({ date: "", text: "", id: "" });
  }

  return (
    <div className={styles.card}>
      <div className={styles.label}>Adicione uma Justificativa</div>
      <div className={styles.form}>
        {" "}
        <form onSubmit={submit}>
          <label htmlFor="date">Data:</label>
          <input
            type="date"
            id="date"
            value={justify.date}
            className={styles.input}
            onChange={handleOnChange}
          />
          <label htmlFor="text">Descreva a justificativa:</label>
          <textarea
            id="text"
            value={justify.text}
            className={styles.textarea}
            onChange={handleOnChange}
          />
          <button type="submit" className={styles.button} onClick={submit}>
            <IoIosAdd /> Justificar
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCard;
