import React, { useState } from 'react';
import './../style/PostIt.css';

const PostIt = ({ name, message, style, isRead, onMarkAsRead }) => {
    const postItColors =  ["#FFD700", "#FFB6C1", "#98FB98", "#87CEEB", "#FF69B4", "#FFDAB9", "#E6E6FA", "#F0E68C", "#FF6347", "#DDA0DD"];//Golden, Linght Pink, Pale Green, Sky Blue, Hot Pink, Peach Puff, Lavender, khaki, Tomato, Plum
    const [isModalOpen, setModalOpen] = useState(false);
    const randomColor = postItColors[Math.floor(Math.random() * postItColors.length)];

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
                    backgroundColor: randomColor,
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
