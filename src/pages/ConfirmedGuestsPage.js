// ConfirmedGuestsPage.js
import React, { useState, useEffect } from 'react';
import NavBar from './../component/NavBar.js';
import './../style/ConfirmedGuests.css';

const ConfirmedGuestsPage = () => {
  const [guests, setGuests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Verifica se o usuário tem permissão para ver a página
  const canRead = JSON.parse(localStorage.getItem('canRead'));

  

  useEffect(() => {
    const fetchGuests = async () => {
      try {
       const response = await fetch('https://nataliaemarcos.online/getMessages.php');
      const data = await response.json();

        // Filtra apenas os convidados com o campo `name` preenchido
        const filteredGuests = data.filter((guest) => guest.name);
        setGuests(filteredGuests);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchGuests();
  }, []);

  const totalPages = Math.ceil(guests.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedGuests = guests.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <section className="confirmed-guests-section">
      <NavBar />
      {canRead ? (
        <>
          <h1>Convidados Confirmados</h1>
          <div className="confirmed-guests-container">
            <ul>
              {selectedGuests.map((guest) => (
                <li key={guest.id} className="guest-item">
                  <p><strong>Nome:</strong> {guest.name}</p>
                  <p><strong>Confirmou presença:</strong> {guest.conf ? 'Sim' : 'Não'}</p>
                  {guest.message && <p><strong>Mensagem:</strong> {guest.message}</p>}
                </li>
              ))}
            </ul>

            {totalPages > 1 && (
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
            )}
          </div>
        </>
      ) : (
        <div className="access-denied-message">
          <h2>Você não tem permissão para acessar esta página.</h2>
        </div>
      )}
    </section>
  );
};

export default ConfirmedGuestsPage;
