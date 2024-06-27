import React from 'react';
import './../style/Date.css'

import Menu from '../component/Menu.js';
import Countdown from '../component/Countdown.js';

const VenusMars = () => {
  return (
    <section>
      <Menu />
      <Countdown targetDate="2025-01-05T00:00:00" />
        <div className='date-center'>
          <span>05 / 01 / 2025</span>
          <h6>FRASE</h6>
          <i className="fa-solid fa-download"></i>
      </div>
    </section>
  );
};

export default VenusMars;
