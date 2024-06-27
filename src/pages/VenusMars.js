import React from 'react';

import Menu from './../component/Menu.js';
import Countdown from './../component/Countdown.js';
import CoupleSection from '../component/CoupleSection.js';

const VenusMars = () => {
  return (
    <section>
      <Menu />
      <Countdown targetDate="2025-01-05T00:00:00" />
      <CoupleSection />
    </section>
  );
};

export default VenusMars;
