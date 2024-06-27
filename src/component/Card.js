import React from 'react';
import './../style/Card.css';

const Card = ({ src, title, price, description }) => {
  return (
    <div className="gift-card">
      <img src={src} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;
