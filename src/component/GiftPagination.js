import React, { useState } from 'react';
import './../style/GiftPagination.css';

const GiftPagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className={currentPage === i ? 'active' : ''}>
          <button onClick={() => handleClick(i)}>{i}</button>
        </li>
      );
    }
    return pages;
  };

  return (
    <ul className="pagination">
      {renderPagination()}
    </ul>
  );
};

export default GiftPagination;
