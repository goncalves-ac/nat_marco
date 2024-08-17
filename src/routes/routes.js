import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/** ROTAS */
import Page from '../pages/Page.js';
import SlideshowPage from '../pages/SlideshowPage.js';
import GiftGrid from '../pages/GiftGrid.js';
import VenusMars from '../pages/VenusMars.js';
import Date from '../pages/Date.js';
import QRCodePixPage from '../pages/QRCodePixPage.js';
import RSVPFormPage from '../pages/RSVPFormPage.js';
import RSVPListPage from '../pages/RSVPListPage.js';


function routes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Page />} />
        <Route path="/SlideshowPage" element={<SlideshowPage />} />
        <Route path="/gifts" element={<GiftGrid />} />
        <Route path="/VenusMars" element={<VenusMars />} />
        <Route path="/Date" element={<Date />} />
        <Route path="/Confirmations" element={<RSVPFormPage />} />
        <Route path="/ConfirmationsList" element={<RSVPListPage />} />
        <Route path="/QRCodePix" element={<QRCodePixPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default routes;
