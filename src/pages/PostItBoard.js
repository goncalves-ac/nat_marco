import React, { useState, useEffect } from "react";
import NavBar from './../component/NavBar.js';
import Countdown from './../component/Countdown.js';
import "./../style/PostItBoard.css";

const PostItBoard = () => {
    const messages = [
        { name: "Alice1", message: "Parabéns pelo casamento! Parabéns pelo casamento! Parabéns pelo casamento! Parabéns pelo casamento!" },
        { name: "Alice2", message: "Parabéns pelo casamento!" },
        { name: "Alice3", message: "Parabéns pelo casamento!" },
        { name: "Alice4", message: "Parabéns pelo casamento!" },
        { name: "Alice5", message: "Parabéns pelo casamento!" },
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

    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);
    const [readMessages, setReadMessages] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ name: '', message: '' });

    // Verifica se o usuário tem permissão para ver a página
    const canRead = JSON.parse(localStorage.getItem('canRead'));

    // Ajustar itemsPerPage com base na largura da tela
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth < 1051) {
                setItemsPerPage(messages.length); // Exibe todas as mensagens em uma página
            } else {
                setItemsPerPage(9); // Valor padrão para telas maiores
            }
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage); 

        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, [messages.length]);

    const totalPages = Math.ceil(messages.length / itemsPerPage);
    const currentMessages = messages.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

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
            {canRead ? (
                <div className="post-it-board-container">
                    <div className="post-it-board">
                        {currentMessages.map((msg, index) => {
                            const isRead = readMessages.includes(index);
                            const backgroundColor = "#e8431570"; // Cor padrão para post-it
                            const rotation = `${Math.random() * 10 - 5}deg`;
                            const truncatedMessage = msg.message.length > 50 ? msg.message.slice(0, 50) + "..." : msg.message;

                            return (
                                <div 
                                    key={index}
                                    className="post-it"
                                    style={{ backgroundColor, transform: `rotate(${rotation})` }}
                                    onClick={() => {
                                        openModal(msg);
                                        handleMarkAsRead(index);
                                    }}
                                >
                                    <div className="post-it-name">{msg.name}</div>
                                    <div className="post-it-message">{truncatedMessage}</div>
                                    {isRead && <span className="checkmark">&#10003;</span>}
                                </div>
                            );
                        })}
                    </div>
                    {totalPages > 1 && (
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
                    )}
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
            ) : (
                <div className="access-denied-message">
                    <h2>Você não tem permissão para acessar esta página.</h2>
                </div>
            )}
        </section>
    );
};

export default PostItBoard;
