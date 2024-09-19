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

        <div className="form-group floating-label">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder=" " // Adicione o placeholder com espaço em branco para o efeito funcionar corretamente
          />
          <label htmlFor="name">Nome:</label>
        </div>

        <div className="space-form">
          <input
            type="checkbox"
            id="conf"
            checked={conf}
            onChange={(e) => setConf(e.target.checked)}
          />
          <label htmlFor="conf" className="conf">Confirmo minha presença</label>
        </div>

        <div className="form-group floating-label">
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder=" " // Adicione o placeholder com espaço em branco para o efeito funcionar corretamente
          ></textarea>
          <label htmlFor="message">Mensagem aos noivos (opcional):</label>
        </div>

        <button type="submit" className='button button-block'>Confirmar Presença</button>
      </form>
    </div>
  );
};

export default RSVPForm;
