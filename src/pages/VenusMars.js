import React from 'react';

import NavBar from './../component/NavBar.js';
import Countdown from './../component/Countdown.js';
import CoupleSection from '../component/CoupleSection.js';

const VenusMars = () => {
  return (
    <section>
      <NavBar />
      <Countdown targetDate="2025-01-05T00:00:00" />
      <CoupleSection />
    </section>
  );
};

export default VenusMars;
