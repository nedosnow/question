// import Form from "../Form/Form";
// import List from "../List/List";
import { useUserContext } from "../../context/userContext";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userName, setUserName } = useUserContext("");

  const ifChange1 = (e) => {
    setName(e.target.value);
  };
  const ifChange2 = (e) => {
    setEmail(e.target.value);
  };
  const ifChange3 = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((men) => {
        setName("");
        setEmail("");
        setPassword("");
        console.log(men);
        console.log("уже имя", userName);
        setUserName(men);
        return (window.location.pathname = "/");
      });
  };

  return (
    <div className=" container center col-md-3">
      <form
        id="signUpForm"
        className="short-form"
        onSubmit={handleSubmit}
        action="/auth/signup"
        method="POST"
      >
        <div className="mb-3">
          <input
            value={name}
            onChange={ifChange1}
            name="name"
            placeholder="Введите ваше имя"
            required
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <input
            value={email}
            onChange={ifChange2}
            name="email"
            placeholder="Ваш email"
            required
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <input
            value={password}
            onChange={ifChange3}
            name="password"
            placeholder="Пароль"
            required
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            minlength="1"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary form-control"
          // style="margin:30px; width:80px; margin-left:0"
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
