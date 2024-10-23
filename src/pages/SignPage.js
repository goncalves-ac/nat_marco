import React, { useState } from "react";
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
  
  const [signupStatus, setSignupStatus] = useState(null); // Mensagem de sucesso ou erro
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTabClick = (tab, e) => {
    e.preventDefault();
    setActiveTab(tab);
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

    const signupData = {
      action: "signup",
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    // Fazer a requisição para a API
    fetch("https://nataliaemarcos.online/user.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        setSignupStatus({ type: "success", message: data.message }); // Mensagem de sucesso
      } else {
        setSignupStatus({ type: "error", message: data.message }); // Mensagem de erro
      }
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
      setSignupStatus({ type: "error", message: "Erro no servidor, tente novamente mais tarde." });
    });
  };

  return (
    <section>
      <NavBar />
      <Countdown targetDate="2025-01-05T00:00:00" />
      <div className="form-container">
        <div className="form">
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

          <div className="tab-content">
            {activeTab === "signup" && (
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
                      <label className={formData.firstName ? "active" : ""}>
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
                      <label className={formData.lastName ? "active" : ""}>
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
                    <label className={formData.email ? "active" : ""}>
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
                    <label className={formData.password ? "active" : ""}>
                    Senha<span className="req">*</span>
                    </label>
                  </div>

                  <button type="submit" className="button button-block">
                    Inicie
                  </button>
                </form>

                {/* Exibir o status do cadastro */}
                {signupStatus && (
                  <div className={`status ${signupStatus.type}`}>
                    <span>{signupStatus.type === "success" ? "✔" : "✖"}</span> {signupStatus.message}
                  </div>
                )}
              </div>
            )}

            {/* Aba de login */}
            {activeTab === "login" && (
              <div id="login">
                <h1>Bem vindo de volta!</h1>
                {/* Formulário de login */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignPage;
