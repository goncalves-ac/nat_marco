import React, { useState } from 'react';
import './../style/GiftGrid.css';

import Card from './../component/Card.js'; 
import NavBar from './../component/NavBar.js';
import Countdown from './../component/Countdown.js';
import GiftPagination from './../component/GiftPagination.js';
import QRCodePix from './../component/QRCodePix.js';

import QRCodePixIMG from './../img/qr-code.png';

const importAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

const images = importAll(require.context('./../img/gifts', false, /\.(jpg|jpeg|png|gif)$/));

const parseImageName = (filename) => {
  const [title, priceWithExt] = filename.split('-');
  const price = `R$ ${priceWithExt.split('.')[0]}`;
  const formattedTitle = title.replace(/_/g, ' ').replace(/^\w/, (c) => c.toUpperCase());
  return { title: formattedTitle, price };
};

const gifts = images.map((image) => {
  const filename = image.split('/').pop();
  const { title, price } = parseImageName(filename);
  return { src: image, title, price, description: "Uma descrição personalizada." };
});

const GiftGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGifts = gifts.slice(startIndex, endIndex);

  const isMobile = window.innerWidth <= 768; // Ou qualquer lógica para verificar o tamanho da tela

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
    <section>
      <NavBar />
      <QRCodePix
        qrCodeUrl={QRCodePixIMG} // URL do QRCode
        mobileView={isMobile}
      />
      <Countdown targetDate="2025-01-05T00:00:00" />
      <div className="gift-grid">
        {currentGifts.map((gift, index) => (
          <Card
            key={index}
            src={gift.src}
            title={gift.title}
            price={gift.price}
            description={gift.description}
          />
        ))}
      </div>
      <GiftPagination 
        totalItems={gifts.length} 
        itemsPerPage={itemsPerPage} 
        onPageChange={handlePageChange} 
      />
    </section>
  );
};

export default GiftGrid;
