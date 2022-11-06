import { useState, useEffect } from "react";
import logo from "./../logo.svg";
import "./../App.css";
import {GoogleLogin} from 'react-google-login';




async function doLogin({ email, password }) {
    // Gunakan endpoint-mu sendiri
    const response = await fetch("http://localhost:3001/api/v1/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const data = await response.json();
    return data.token;
}
const haldleSuccessGoogle = (response) => {
    console.log(response);
    console.log(response.tokenId);
    if(response.tokenId) {
        doLoginWithGoogle(response.tokenId)
        .then((token) => {
        localStorage.setItem("token", token);setIsLoggedIn(token);
        })
        .catch((err) => console.log(err.message))
        .finally(() => setIsLoading(false));}}

const haldleFailureGoogle = (response) => {
    console.log(response);
    alert(response);
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    doLogin({ email, password })
      .then((token) => localStorage.setItem("token", token))
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }

  function handleLogout(e) {
    setIsLoading(true);
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsLoading(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {!isLoggedIn ? (
            <>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input type="submit" value={isLoading ? "Loading" : "Login"} />
          </form>
          <GoogleLogin
                clientId={process.env.GOOGLE_CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={haldleSuccessGoogle}
                onFailure={haldleFailureGoogle}
                cookiePolicy={"single host origin"}
            />
            </>
        ) : (
          <input type="submit" value="Logout" onClick={handleLogout} />
        )}
      </header>
    </div>
  );
}

export default Login;
