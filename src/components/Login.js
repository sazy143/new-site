import Register from "./Register";

let Login = () => {
  let gotoRegister = () => {
    return <Register></Register>;
  };

  return (
    <div className="container">
      <h1>Login</h1>

      <button onClick={() => gotoRegister()}>Register</button>
    </div>
  );
};

export default Login;
