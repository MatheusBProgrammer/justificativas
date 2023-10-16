import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

function Navbar({ user }) {
  return <div className={styles.navbar}>UBS - Justificativas {user}</div>;
}

export default Navbar;
