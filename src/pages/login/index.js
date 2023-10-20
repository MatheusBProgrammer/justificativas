import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import Input from "../../components/formComponents/Input";
import Button from "../../components/formComponents/Button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Index() {
  const [dataUser, setDataUser] = useState({});
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  function handleChange(e) {
    setDataUser({ ...dataUser, [e.target.id]: e.target.value });
    console.log(dataUser);
  }

  function submit(e) {
    e.preventDefault();
    // Faça uma solicitação GET para obter os dados do servidor
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => data.find((user) => user.cpf === dataUser.cpf))
      .then((data) => {
        setUser(data);
      })
      .then((data) => navigate("/home"))

      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.container}>
      <div>
        <h1>Insira seus dados</h1>

        <form className={styles.form}>
          <Input
            name={"cpf"} // Deve corresponder ao campo no estado dataUser
            text={"cpf"}
            placeholder={"Digite seu cpf"}
            handleOnchange={handleChange}
          />
          <Input
            name={"senha"} // Deve corresponder ao campo no estado dataUser
            text={"senha"}
            placeholder={"Digite sua senha"}
            handleOnchange={handleChange}
            type={"password"}
          />
          <Button value={"Entrar"} submit={submit} />
        </form>
      </div>
    </div>
  );
}

export default Index;
