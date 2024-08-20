import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importando o CSS da Font Awesome
import { Link } from 'react-router-dom';

import './../style/QRCodePix.css'; // Importe o CSS para estilização

const QRCodeComponent = ({ qrCodeUrl, mobileView }) => {
  const copyPixToClipboard = () => {
    const pixCode = '00020126360014br.gov.bcb.pix0114+55319880817965204000053039865802BR5924NATALIA PEREIRA DE SOUZA6014Belo Horizonte610930640-16062290525PJUO428988251724027278793630461BB';
    navigator.clipboard.writeText(pixCode)
      .then(() => {
        alert('Código PIX copiado para a área de transferência!');
      })
      .catch((err) => {
        console.error('Erro ao copiar o código PIX: ', err);
      });
  };

  return (
    <div className="qrcode-container">
      <Link to="/qrcodepix">
        <img src={qrCodeUrl} alt="QRCode para o PIX de presente" className="qrcode-image" />
      </Link>
      <button onClick={copyPixToClipboard} className="copy-pix-button">Copiar pix</button>
    </div>
  );
};

export default QRCodeComponent;
