import React from 'react';
import './../style/Date.css'

import NavBar from './../component/NavBar.js';
import Countdown from '../component/Countdown.js';

import DESTAQUE from './../img/Destaque.jpg';


const VenusMars = () => {
  return (
    <section>
      <NavBar />
      <Countdown targetDate="2025-01-05T00:00:00" />
      <div className='container-date-center'>
        <div className='date-center-img'>
          <img src={DESTAQUE} alt="groom" className="img-responsive" />
        </div>
        <div className='date-center'>
          <span>05<br />Janeiro<br />2025</span>
        </div>
      </div>
    </section>
  );
};

export default VenusMars;
