import React from "react";
import styles from "./Add.module.css";
import { IoIosAdd, IoIosAddCircleOutline } from "react-icons/io";
function Add({ buttonSubmit }) {
  function submit(e) {
    e.preventDefault();
    buttonSubmit();
  }

  return (
    <div>
      <button
        className={`${styles.button} ${styles["round-button"]}`}
        onClick={submit}
      >
        <IoIosAdd />
      </button>
    </div>
  );
}

export default Add;
