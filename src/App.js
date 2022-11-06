import logo from './logo.svg';
import './App.css';
import LoginButton from "./component/Login";
import LogoutButton from "./component/Logout";
import {useEffect} from 'react';
import {gapi} from 'gapi-script';

const clientId = "926290861372-26kkthps3hif1sjura8vectatnnk0sm3.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
      <LoginButton/>
      <LogoutButton/>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
