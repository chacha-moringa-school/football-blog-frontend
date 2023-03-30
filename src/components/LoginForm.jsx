import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

    

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginDetails = {username, password}

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginDetails)
    })
    .then((res)=> res.json())
    .then((user)=> console.log(user))
  };

  return (
    <div className="container" style={{minHeight: "100vh"}}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => { return setUsername(event.target.value)}} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => { return setPassword(event.target.value);}} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default LoginForm;
