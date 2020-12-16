import { useState } from "react";

let LoginRegister = (props) => {
  let [login, setLogin] = useState(true);

  let elementReturned;

  if (login) {
    elementReturned = <Login setLogin={setLogin}></Login>;
  } else {
    elementReturned = <Register setLogin={setLogin}></Register>;
  }

  return <div>{elementReturned}</div>;
};

let Login = (props) => {
  return (
    <div className="container">
      <h1>Login</h1>

      <button onClick={() => props.setLogin(false)}>Register</button>
    </div>
  );
};
let Register = (props) => {
  return (
    <div className="container">
      <h1>Register</h1>

      <button onClick={() => props.setLogin(true)}>Register</button>
    </div>
  );
};

export default LoginRegister;
