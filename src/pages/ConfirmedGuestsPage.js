// ConfirmedGuestsPage.js
import React, { useState, useEffect } from 'react';
import NavBar from './../component/NavBar.js';
import './../style/ConfirmedGuests.css';

const ConfirmedGuestsPage = () => {
  const [confirmedGuests, setConfirmedGuests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchConfirmedGuests = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/rsvps');
        const data = await response.json();
        const filteredGuests = data.filter((guest) => guest.conf === true);
        setConfirmedGuests(filteredGuests);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchConfirmedGuests();
  }, []);

  const totalPages = Math.ceil(confirmedGuests.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedGuests = confirmedGuests.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <section className="confirmed-guests-section">
      <NavBar />
      <h1>Convidados Confirmados</h1>
      <div className="confirmed-guests-container">
        <ul>
          {selectedGuests.map((guest, index) => (
            <li key={index} className="guest-item">
              <p><strong>Nome:</strong> {guest.name}</p>
              {guest.message && <p><strong>Mensagem:</strong> {guest.message}</p>}
            </li>
          ))}
        </ul>

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? 'active' : ''}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConfirmedGuestsPage;
