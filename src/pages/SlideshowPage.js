import React from 'react';
import './../style/Slideshow.css';

import Menu from './../component/Menu.js';
import Countdown from './../component/Countdown.js';
import Slideshow from '../component/Slideshow.js';

const importAll = (r) => {
  let images = [];
  r.keys().forEach((item, index) => {
    images.push({
      src: r(item),
      caption: `Caption ${index + 1}`
    });
  });
  return images;
};

const images = importAll(require.context('../img/PreNatMarcos_Gallery', false, /\.(png|jpe?g|svg)$/));

const SlideshowPage = () => {
  return (
    <section>
      <Menu />
      <Countdown targetDate="2025-01-05T00:00:00" />
      <div>
        <Slideshow images={images} />
      </div>
    </section>
  );
};

export default SlideshowPage;

