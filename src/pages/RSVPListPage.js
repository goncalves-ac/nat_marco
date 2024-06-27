import React, { useState, useEffect } from 'react';
import Menu from './../component/Menu.js';
import Countdown from './../component/Countdown.js';
import RSVPList from './../component/RSVPList.js';

function RSVPListPage() {
  const [rsvps, setRSVPs] = useState([]);

  useEffect(() => {
    const fetchRSVPs = async () => {
      const response = await fetch('http://localhost:5000/api/rsvps');
      const data = await response.json();
      setRSVPs(data);
    };
    fetchRSVPs();
  }, []);

  return (
    <section>
      <Menu />
      <Countdown targetDate="2025-01-05T00:00:00" />
      <div className='RSVP'>
        <RSVPList rsvps={rsvps} />
      </div>
    </section>
  );
}

export default RSVPListPage;
