import React, { useState } from "react";
import PostIt from "./../component/PostIt.js";
import NavBar from './../component/NavBar.js';
import Countdown from './../component/Countdown.js';
import "./../style/PostItBoard.css";

const PostItBoard = () => {
    const messages = [
        { name: "Alice1", message: "Parabéns pelo casamento!" },
        { name: "Alice2", message: "Parabéns pelo casamento!" },
        { name: "Alice3", message: "Parabéns pelo casamento!" },
        { name: "Alice4", message: "Parabéns pelo casamento!" },
        { name: "Alice5", message: "Parabéns pelo casamento!" },
        { name: "Alice6", message: "Parabéns pelo casamento!" },
        { name: "Alice7", message: "Parabéns pelo casamento!" },
        { name: "Alice8", message: "Parabéns pelo casamento!" },
        { name: "Alice9", message: "Parabéns pelo casamento!" },
        { name: "Bob1", message: "Desejo a vocês uma vida cheia de amor e felicidade!" },
        { name: "Bob2", message: "Desejo a vocês uma vida cheia de amor e felicidade!" },
        { name: "Bob3", message: "Desejo a vocês uma vida cheia de amor e felicidade!" },
        { name: "Bob4", message: "Desejo a vocês uma vida cheia de amor e felicidade!" },
        { name: "Bob5", message: "Desejo a vocês uma vida cheia de amor e felicidade!" },
        { name: "Bob6", message: "Desejo a vocês uma vida cheia de amor e felicidade!" },
        { name: "Bob7", message: "Desejo a vocês uma vida cheia de amor e felicidade!" },
        { name: "Bob8", message: "Desejo a vocês uma vida cheia de amor e felicidade!" },
        { name: "Bob9", message: "Desejo a vocês uma vida cheia de amor e felicidade!" },
        { name: "Ana1", message: "Desejo a vocês uma vida cheia!" },
        { name: "Ana2", message: "Desejo a vocês uma vida cheia!" },
        { name: "Ana3", message: "Desejo a vocês uma vida cheia!" },
        { name: "Ana4", message: "Desejo a vocês uma vida cheia!" },
        { name: "Ana5", message: "Desejo a vocês uma vida cheia!" },
        { name: "Ana6", message: "Desejo a vocês uma vida cheia!" },
        { name: "Ana7", message: "Desejo a vocês uma vida cheia!" },
        { name: "Ana8", message: "Desejo a vocês uma vida cheia!" },
        { name: "Ana9", message: "Desejo a vocês uma vida cheia!" },
    ];

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [readMessages, setReadMessages] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ name: '', message: '' });

    const totalPages = Math.ceil(messages.length / itemsPerPage);
    const currentMessages = messages.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleMarkAsRead = (index) => {
        setReadMessages([...readMessages, index]);
    };

    const openModal = (msg) => {
        setModalContent(msg);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section>
            <NavBar />
            <Countdown targetDate="2025-01-05T00:00:00" />
            <div className="post-it-board-container">
                <div className={`post-it-board ${window.innerWidth <= 1000 ? 'list-view' : ''}`}>
                    {currentMessages.map((msg, index) => {
                        const isRead = readMessages.includes(index);
                        const backgroundColor = generateRandomColor();
                        return (
                            <div 
                                key={index}
                                className="post-it"
                                style={{ '--random-color': backgroundColor }}
                                onClick={() => {
                                    openModal(msg);
                                    handleMarkAsRead(index);
                                }}
                            >
                                <div className="post-it-name">
                                    {msg.name}
                                </div>
                                {window.innerWidth > 1000 && (
                                    <div className="post-it-message">
                                        {msg.message}
                                    </div>
                                )}
                                {isRead && <span className="checkmark">&#10003;</span>}
                            </div>
                        );
                    })}
                </div>
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={i + 1 === currentPage ? "active" : ""}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
                {isModalOpen && (
                    <div className="modal" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close" onClick={closeModal}>&times;</span>
                            <h2>{modalContent.name}</h2>
                            <p>{modalContent.message}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PostItBoard;
