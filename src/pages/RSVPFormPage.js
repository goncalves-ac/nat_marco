import React, { useState } from 'react';
import NavBar from './../component/NavBar.js';
import Countdown from './../component/Countdown.js';
import RSVPForm from './../component/RSVPForm.js';

function RSVPFormPage() {
  const [rsvps, setRSVPs] = useState([]);

  const addRSVP = async (newRSVP) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newRSVP.name,
        conf: newRSVP.conf,
        message: newRSVP.message,
        readed: false,
      }),
    });

    const data = await response.json();
    if (data.status === 'success') {
      setRSVPs((prevRSVPs) => [...prevRSVPs, newRSVP]);
    } else {
      console.error('Erro ao salvar RSVP:', data.message);
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
