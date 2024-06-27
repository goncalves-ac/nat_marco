import React, { useState } from 'react';
import './../style/RSVPList.css';

const RSVPList = ({ rsvps, itemsPerPage = 4 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(rsvps.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedRSVPs = rsvps.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className='RSVPList-section'>
      <div className="rsvp-list-container">
        <h2>Confirmações de Presença</h2>
        <ul>
          {selectedRSVPs.map((rsvp, index) => (
            <li key={index}>
              <p><strong>Nome:</strong> {rsvp.name}</p>
              <p><strong>Presença:</strong> {rsvp.conf === true ? 'Presente' : 'Ausente'}</p>
              <p><strong>Mensagem:</strong> {rsvp.message}</p>
            </li>
          ))}
        </ul>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? 'active' : ''}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RSVPList;
