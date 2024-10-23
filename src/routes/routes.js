import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importar as páginas
import Page from '../pages/Page.js';
import SlideshowPage from '../pages/SlideshowPage.js';
import GiftGrid from '../pages/GiftGrid.js';
import VenusMars from '../pages/VenusMars.js';
import Date from '../pages/Date.js';
import QRCodePixPage from '../pages/QRCodePixPage.js';
import RSVPFormPage from '../pages/RSVPFormPage.js';
import RSVPListPage from '../pages/RSVPListPage.js';
import PostIt from '../pages/PostItBoard.js';
import LoginPage from '../pages/SignPage.js';
import ConfirmedGuestsPage from '../pages/ConfirmedGuestsPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/SlideshowPage" element={<SlideshowPage />} />
      <Route path="/gifts" element={<GiftGrid />} />
      <Route path="/VenusMars" element={<VenusMars />} />
      <Route path="/Date" element={<Date />} />
      <Route path="/Confirmations" element={<RSVPFormPage />} />
      <Route path="/ConfirmationsList" element={<RSVPListPage />} />
      <Route path="/Mensagens" element={<PostIt />} />
      <Route path="/QRCodePix" element={<QRCodePixPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/ConfirmedGuests" element={<ConfirmedGuestsPage />} />
    </Routes>
  );
}

export default AppRoutes;
