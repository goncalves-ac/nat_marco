import React, { useState } from 'react';
import Menu from './../component/Menu.js';
import Countdown from './../component/Countdown.js';
import RSVPForm from './../component/RSVPForm.js';

function RSVPFormPage() {
  const [rsvps, setRSVPs] = useState([]);

  const addRSVP = async (newRSVP) => {
    const response = await fetch('http://localhost:3000/api/rsvps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRSVP),
    });
    const data = await response.json();
    setRSVPs((prevRSVPs) => [...prevRSVPs, data]);
  };

  return (
    <section>
      <Menu />
      <Countdown targetDate="2025-01-05T00:00:00" />
      <div className='RSVP'>
        <RSVPForm setRSVPs={addRSVP} />
      </div>
    </section>
  );
}

export default RSVPFormPage;
