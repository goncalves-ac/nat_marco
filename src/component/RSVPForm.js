import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../style/RSVPForm.css';

const RSVPForm = ({ setRSVPs, formData, setFormData }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setRSVPs(); // Chama a função que faz a requisição
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
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            placeholder=" "
          />
          <label htmlFor="name">Nome:</label>
        </div>

        <div className="space-form">
          <input
            type="checkbox"
            id="conf"
            checked={formData.conf}
            onChange={(e) => setFormData({ ...formData, conf: e.target.checked })}
          />
          <label htmlFor="conf" className="conf">Confirmo minha presença</label>
        </div>

        <div className="form-group floating-label">
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder=" "
          ></textarea>
          <label htmlFor="message">Mensagem aos noivos (opcional):</label>
        </div>

        <button type="submit" className='button button-block'>Confirmar Presença</button>
      </form>
    </div>
  );
};

export default RSVPForm;
