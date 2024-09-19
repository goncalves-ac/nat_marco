import React, { useState, useEffect } from 'react';
import NavBar from './../component/NavBar.js';
import Countdown from './../component/Countdown.js';
import RSVPForm from './../component/RSVPForm.js';

function RSVPFormPage() {
  const [rsvps, setRSVPs] = useState([]);
  const [apiUrl, setApiUrl] = useState('');

  useEffect(() => {
    // Buscar a URL da API através de uma rota do backend
    fetch('/api/config')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar configuração da API');
        }
        return response.json();
      })
      .then((data) => {
        setApiUrl(data.apiUrl);
      })
      .catch((error) => console.error('Erro ao buscar a configuração da API:', error));
  }, []);

  const addRSVP = async (newRSVP) => {
    try {
      const response = await fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newRSVP.name,
          conf: newRSVP.conf,
          message: newRSVP.message,
          readed: false, // Definido como false por padrão
        }),
      });

      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        if (data.status === 'success') {
          setRSVPs((prevRSVPs) => [...prevRSVPs, newRSVP]);
        } else {
          console.error('Erro ao salvar RSVP:', data.message);
        }
      } else {
        const text = await response.text();
        console.error('Resposta inesperada:', text);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <section>
      <NavBar />
      <Countdown targetDate="2025-01-05T00:00:00" />
      <div className="RSVP">
        <RSVPForm setRSVPs={addRSVP} />
      </div>
    </section>
  );
}

export default RSVPFormPage;
