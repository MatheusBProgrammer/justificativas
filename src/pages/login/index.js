import React, { useState } from "react";
import styles from "./index.module.css";
import Input from "../../components/formComponents/Input";
import Button from "../../components/formComponents/Button";

function Index() {
  const [dataUser, setDataUser] = useState({});

  function handleChange(e) {
    setDataUser({ [e.target.name]: e.target.value });
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
      .then((data) => console.log(data))

      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.container}>
      <div>
        <h1>Insira seus dados</h1>

        <form className={styles.form}>
          <Input
            name={"cpf"} // Deve corresponder ao campo no estado dataUser
            text={"Nome"}
            placeholder={"Digite seu cpf"}
            handleOnchange={handleChange}
          />
          <Input
            name={"senha"} // Deve corresponder ao campo no estado dataUser
            text={"senha"}
            placeholder={"Digite sua senha"}
            handleOnchange={handleChange}
          />
          <Button value={"Entrar"} submit={submit} />
        </form>
      </div>
    </div>
  );
}

export default Index;
