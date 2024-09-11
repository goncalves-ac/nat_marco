import React from "react";
function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`Você está logado com e-mail: ${email} e senha: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form className="sing-form" onSubmit={handleOnSubmit}>
        <h1 className="sing-h1">Entrar</h1>
        <span className="sing-span">ou crie sua conta</span>
        <input
          className="sing-input"
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          className="sing-input"
          type="password"
          name="password"
          placeholder="Senha"
          value={state.password}
          onChange={handleChange}
        />
        <a className="" href="#">Esqueceu sua senha?</a>
        <button className="sing-button">Entrar</button>
      </form>
    </div>
  );
}

export default SignInForm;
