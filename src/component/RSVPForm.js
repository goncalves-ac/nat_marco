import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../style/RSVPForm.css';

const RSVPForm = ({ setRSVPs }) => {
  const [name, setName] = useState('');
  const [conf, setConf] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRSVP = { name, conf, message };
    setRSVPs(newRSVP);
    navigate('/Confirmations');
  };

  return (
    <div className="rsvp-form-container">
      <form onSubmit={handleSubmit} className="rsvp-form">
        <h2>Confirme sua presença</h2>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="conf"
            checked={conf}
            onChange={(e) => setConf(e.target.checked)}
          />
          <label htmlFor="conf"> Confirmo minha presença. </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem aos noivos (opcional):</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Confirmar Presença</button>
      </form>
    </div>
  );
};

export default RSVPForm;
