import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import AddCard from "../../components/card/AddCard";
import JustCard from "../../components/card/JustCard";

function Home() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/users/${user.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((dados) => {
          setData(dados.just);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Erro ao buscar dados:", error);
          setIsLoading(false);
        });
    }
  }, [user]);

  function submit(justify) {
    fetch(`http://localhost:5000/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ just: [...data, justify] }),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Falha ao atualizar o objeto do usuário");
        }
        console.log("Conteúdo adicionado com sucesso");
        setData([...data, justify]);
      })
      .catch((err) => console.log(err));
  }
  function deletarJustificativa(id) {
    const newData = data.filter((item) => item.id !== id);
    const updatedUserData = { ...user, just: newData };

    fetch(`http://localhost:5000/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Falha ao atualizar o objeto do usuário");
        }
        console.log("Justificativa excluída com sucesso");
        setData(newData); // Atualize o estado com os dados após a exclusão
      })
      .catch((err) => console.log(err));
  }

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <AddCard buttonSubmit={submit} />
        {data &&
          data.map((dados, index) => (
            <JustCard
              id={dados.id}
              key={index}
              data={dados.date}
              justificativa={dados.text}
              deletar={() => deletarJustificativa(dados.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
