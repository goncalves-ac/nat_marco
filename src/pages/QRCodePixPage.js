import React from 'react';
import './../style/QRCodePage.css';

import NavBar from './../component/NavBar.js';
import Countdown from './../component/Countdown.js';

import QRCodePixIMG from './../img/qrcode-pix.png';

const QRCodePage = () => {
  return (
    <div className="qrcode-page">
        <NavBar />
        <Countdown targetDate="2025-01-05T00:00:00" />
        <div className="qrcode-container-page">
            <img src={QRCodePixIMG} alt="QRCode para o PIX de presente" className="qrcode-image-page" />
        </div>
    </div>
  );
};

export default QRCodePage;
