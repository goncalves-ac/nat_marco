import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importando o CSS da Font Awesome
import { Link } from 'react-router-dom';

import './../style/QRCodePix.css'; // Importe o CSS para estilização

const QRCodeComponent = ({ qrCodeUrl, mobileView }) => {
  return (
    <div className="qrcode-container">
      <Link to="/qrcodepix">
        <img src={qrCodeUrl} alt="QRCode para o PIX de presente" className="qrcode-image" />
      </Link>    
    </div>
  );
};

export default QRCodeComponent;
