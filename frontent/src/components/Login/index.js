import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';
import './index.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errMsg, setError] = useState('');
 

const onsubmitSuccess = jwtToken => {

    Cookies.set("jwt_token", jwtToken, {
      expires: 30,
      path: "/",
    });
    navigate("/", { replace: true });
}
const onSubmitFailure = () => {
    setIsError(true) 
    setError("Invalid user credentials");     
}
const submitData = async event => {
    event.preventDefault();
    console.log(username, password);
    const profile = {
      username,
      password,
    }
    navigate("/", { replace: true });
    const options = {
        method: 'POST',
        body: JSON.stringify(profile)
    }
    const response =  await fetch('http://localhost:3000/api/login', options);
    const data = response.json();
    if (response.ok === false) {
        onsubmitSuccess(data.jwt_token)
    } else {
        onSubmitFailure();
    }

}

  return (
    <div className="cont">
      <form className="form-cont" onSubmit={submitData}>
        <h1 className="login-head">Login</h1>
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit" className="submit-btn">Login</button>
        {isError && <p className="err-msg">{errMsg}</p>}
      </form>
    </div>
  );
};

export default Login;