import React, { useState } from 'react';
import './../style/FeedbackMessage.css'; // Certifique-se de criar o arquivo CSS

const FeedbackMessage = ({ type, message, onClick }) => {
  return (
    <div className={`feedback-message ${type}`} onClick={onClick}>
      <div className="feedback-icon">
        {type === 'success' ? '✔️' : '❌'}
      </div>
      <div className="feedback-content">
        <h2>{type === 'success' ? 'Success!' : 'Error!'}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default FeedbackMessage;
