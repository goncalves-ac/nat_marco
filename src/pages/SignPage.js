import React, { useState } from "react";
import "./../style/SignPage.css";
import SignInForm from "./../component/SignInForm.js";
import SignUpForm from "./../component/SignUpForm.js";
import NavBar from './../component/NavBar.js';
import Countdown from './../component/Countdown.js';

export default function App() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "sing-container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <section>
      <NavBar />
      <Countdown targetDate="2025-01-05T00:00:00" />
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="sing-h1">Bem vindo de volta!</h1>
              <p className="sing-p">
                Para se manter conectado conosco, faça login com suas informações pessoais
              </p>
              <button
                className="sing-button ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Entrar
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Olá!</h1>
              <p>Insira seus dados pessoais e comece sua jornada conosco</p>
              <button
                className="sing-button ghost"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}