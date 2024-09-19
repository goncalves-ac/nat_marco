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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTabClick = (tab, e) => {
    e.preventDefault(); // Impede o comportamento padrão do link
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
                <form>
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
              </div>
            )}

            {activeTab === "login" && (
              <div id="login">
                <h1>Bem vindo de volta!</h1>
                <form>
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

                  <p className="forgot">
                    <a href="#" className="LinkForgot">Esqueceu sua senha?</a>
                  </p>

                  <button className="button button-block">Entre</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignPage;
