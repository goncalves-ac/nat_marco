import React from "react";
function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
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

    const { name, email, password } = state;
    alert(
      `Você está se inscrevendo com o nome: ${name}, e-mail: ${email} e senha: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form className="sing-form" onSubmit={handleOnSubmit}>
        <h1 className="sing-h1">Crie sua conta</h1>
        <span className="sing-span">ou use seu e-mail cadastrado</span>
        <input
          className="sing-input"
          type="text"
          name="Nome"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="sing-input"
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="E-mail"
        />
        <input
          className="sing-input"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Senha"
        />
        <button className="sing-button">Inscrever-se</button>
      </form>
    </div>
  );
}

export default SignUpForm;
