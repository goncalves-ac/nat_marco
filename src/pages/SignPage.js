import React, { useState, useEffect } from "react";
import NavBar from './../component/NavBar.js';
import Countdown from './../component/Countdown.js';
import "./../style/SignPage.css";

function SignPage () {
  const [activeTab, setActiveTab] = useState("signup");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  
  const [statusMessage, setStatusMessage] = useState(null); // Mensagem de sucesso ou erro
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de login
  
  useEffect(() => {
    // Verifica o estado de login ao carregar a página
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTabClick = (tab, e) => {
    e.preventDefault();
    setActiveTab(tab);
    setStatusMessage(null); // Reseta a mensagem ao mudar de aba
  };

  const handleInputFocus = (e) => {
    e.target.classList.add('focused');
  };
  
  const handleInputBlur = (e) => {
    if (!e.target.value) {
      e.target.classList.remove('focused');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Evita o refresh da página

    const action = activeTab === "signup" ? "signup" : "login";
    const requestData = {
      action,
      email: formData.email,
      password: formData.password,
    };

    if (action === "signup") {
      requestData.firstName = formData.firstName;
      requestData.lastName = formData.lastName;
    }

    // Fazer a requisição para a API
    fetch("https://nataliaemarcos.online/user.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        if (action === "login") {
          localStorage.setItem("isLoggedIn", "true"); // Salva o status de login no localStorage
          localStorage.setItem("canRead", data.canRead); // Salva o status de canRead no localStorage
          setIsLoggedIn(true); // Atualiza o estado de login
          window.location.href = '/'; // Redireciona após login
        } else {
          setStatusMessage({ type: "success", message: data.message }); // Mensagem de sucesso no cadastro
        }
      } else {
        setStatusMessage({ type: "error", message: data.message }); // Mensagem de erro
      }
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
      setStatusMessage({ type: "error", message: "Erro no servidor, tente novamente mais tarde." });
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("canRead");
    setIsLoggedIn(false);
    window.location.href = '/'; // Redireciona para a página inicial após logout
  };

  return (
    <section>
      <NavBar />
      <Countdown targetDate="2025-01-05T00:00:00" />
      <div className="form-container">
        <div className="form">
          {!isLoggedIn ? (
            <ul className="tab-group">
              <li
                className={`tab ${activeTab === "signup" ? "active" : ""}`}
                onClick={(e) => handleTabClick("signup", e)}
              >
                <a href="#signup">Inscrever</a>
              </li>
              <li
                className={`tab ${activeTab === "login" ? "active" : ""}`}
                onClick={(e) => handleTabClick("login", e)}
              >
                <a href="#login">Conecte-se</a>
              </li>
            </ul>
          ) : (
            <div className="logged-in-message">
              <h2>Você já está logado!</h2>
              <button onClick={handleLogout} className="logout-button  button-block">Deslogar</button>
            </div>
          )}

          <div className="tab-content">
            {activeTab === "signup" && !isLoggedIn && (
              <div id="signup">
                <h1>Inscreva-se gratuitamente</h1>
                <form onSubmit={handleFormSubmit}>
                  <div className="top-row">
                    <div className="field-wrap">
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                      <label className={formData.firstName || formData.firstName === "" ? "active" : ""}>
                        Nome<span className="req">*</span>
                      </label>
                    </div>
                    <div className="field-wrap">
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                      <label className={formData.lastName || formData.lastName === "" ? "active" : ""}>
                        Sobrenome<span className="req">*</span>
                      </label>
                    </div>
                  </div>

                  <div className="field-wrap">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                    <label className={formData.email || formData.email === "" ? "active" : ""}>
                      E-mail<span className="req">*</span>
                    </label>
                  </div>

                  <div className="field-wrap">
                    <input
                      type="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                    <label className={formData.password || formData.password === "" ? "active" : ""}>
                      Senha<span className="req">*</span>
                    </label>
                  </div>

                  <button type="submit" className="button button-block">
                    Inicie
                  </button>
                </form>
              </div>
            )}

            {/* Aba de login */}
            {activeTab === "login" && !isLoggedIn && (
              <div id="login">
                <h1>Bem-vindo de volta!</h1>
                <form onSubmit={handleFormSubmit}>
                  <div className="field-wrap">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                    <label className={formData.email || formData.email === "" ? "active" : ""}>
                      E-mail<span className="req">*</span>
                    </label>
                  </div>

                  <div className="field-wrap">
                    <input
                      type="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                    <label className={formData.password || formData.password === "" ? "active" : ""}>
                      Senha<span className="req">*</span>
                    </label>
                  </div>

                  <button type="submit" className="button button-block">
                    Entrar
                  </button>
                </form>
              </div>
            )}
          </div>
          {/* Exibir a mensagem de status para ambos os formulários */}
          {statusMessage && (
            <div className={`status ${statusMessage.type}`}>
              <span>{statusMessage.type === "success" ? "✔" : "✖"}</span> {statusMessage.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SignPage;
