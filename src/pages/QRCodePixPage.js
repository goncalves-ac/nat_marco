import React from 'react';
import './../style/QRCodePage.css';

import NavBar from './../component/NavBar.js';
import Countdown from './../component/Countdown.js';

import QRCodePixIMG from './../img/qr-code.png';

const QRCodePage = () => {

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
    <div className="qrcode-page">
        <NavBar />
        <Countdown targetDate="2025-01-05T00:00:00" />
        <div className="qrcode-container-page">
            <img src={QRCodePixIMG} alt="QRCode para o PIX de presente" className="qrcode-image-page" />
            <button onClick={copyPixToClipboard} className="copy-pix-button">Copiar pix</button>
        </div>
    </div>
  );
};

export default QRCodePage;
