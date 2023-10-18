import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import AddCard from "../../components/card/AddCard";
import JustCard from "../../components/card/JustCard";

function Home() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();

  const navigate = useNavigate();

  const { id, setId } = useState();

  //caso o usuário não esteja setado, retorna para a página de login
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((dados) => setData(dados.just));
  }, [user]);

  function submit(justify) {
    // Obtenha o objeto de usuário atual do servidor
    fetch(`http://localhost:5000/users/${user.id}`)
      .then((resp) => resp.json())
      .then((userData) => {
        if (userData && userData.just) {
          userData.just.push(justify);

          fetch(`http://localhost:5000/users/${user.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          })
            .then((resp) => {
              if (!resp.ok) {
                throw new Error("Falha ao atualizar o objeto do usuário");
              }
              console.log("Conteúdo adicionado com sucesso");
            })
            .catch((err) => console.log(err));
        } else {
          console.log(
            "A propriedade 'just' não foi encontrada no objeto do usuário"
          );
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <AddCard buttonSubmit={submit} />
        {data &&
          data.map((dados) => (
            <JustCard data={dados.date} justificativa={dados.text} />
          ))}
      </div>
    </div>
  );
}

export default Home;
