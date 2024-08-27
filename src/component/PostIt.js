import React, { useState } from 'react';
import './../style/PostIt.css';

const PostIt = ({ name, message, style, isRead, onMarkAsRead }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
        setModalOpen(true);
        onMarkAsRead();
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    const handleModalClick = (e) => {
        e.stopPropagation(); // Evita que o clique dentro do modal feche o modal
    };

    return (
        <>
            <div
                className={`post-it ${isRead ? 'read' : ''}`}
                style={{
                    transform: `rotate(${Math.random() * 10 - 5}deg)`,
                    ...style,
                }}
                onClick={handleClick}
            >
                <div className="post-it-content">
                    <div className="post-it-name">{name}</div>
                    <div className="post-it-message">{message}</div>
                </div>
                {isRead && <span className="checkmark">&#10003;</span>}
            </div>

            {isModalOpen && (
                <div className="modal" onClick={handleClose}>
                    <div className="modal-content" onClick={handleModalClick}>
                        <span className="close" onClick={handleClose}>&times;</span>
                        <h2>{name}</h2>
                        <p>{message}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default PostIt;
