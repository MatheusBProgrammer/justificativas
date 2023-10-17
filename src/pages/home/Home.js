import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import Add from "../../components/card/Add";

function Home() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  //caso o usuário não esteja setado, retorna para a página de login
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <Add />
      </div>
    </div>
  );
}

export default Home;
