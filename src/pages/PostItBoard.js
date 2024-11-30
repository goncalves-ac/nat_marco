import React, { useState, useEffect } from "react";
import NavBar from './../component/NavBar.js';
import Countdown from './../component/Countdown.js';
import "./../style/PostItBoard.css";

const PostItBoard = () => {
    const [messages, setMessages] = useState([]);
    const [readMessages, setReadMessages] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ id: null, name: '', message: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const canRead = JSON.parse(localStorage.getItem('canRead'));

    useEffect(() => {
        fetch("https://nataliaemarcos.online/getMessages.php")
            .then((response) => response.json())
            .then((data) => {
                setMessages(data);
                // Extrair IDs das mensagens lidas e atualizar o estado
                const readIds = data.filter((msg) => msg.readed === 1).map((msg) => msg.id);
                setReadMessages(readIds);
            })
            .catch((error) => console.error("Erro ao buscar mensagens:", error));
    }, []);

    const markAsRead = (id) => {
        fetch("https://nataliaemarcos.online/getMessages.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success") {
                    setReadMessages((prevReadMessages) => [...prevReadMessages, id]);
                } else {
                    console.error("Erro ao marcar mensagem como lida:", data.message);
                }
            })
            .catch((error) => console.error("Erro ao marcar mensagem como lida:", error));
    };

    const openModal = (msg) => {
        setModalContent(msg);
        setModalOpen(true);
        if (!readMessages.includes(msg.id)) {
            markAsRead(msg.id);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Lógica para mensagens paginadas
    const totalPages = Math.ceil(messages.length / itemsPerPage);
    const currentMessages = messages.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <section>
            <NavBar />
            <Countdown targetDate="2025-01-05T00:00:00" />
            {canRead ? (
                <div className="post-it-board-container">
                    <div className="post-it-board">
                        {currentMessages.map((msg) => {
                            const isRead = readMessages.includes(msg.id);
                            const backgroundColor = isRead ? "#90ee90" : "#e8431570";
                            const rotation = `${Math.random() * 10 - 5}deg`;
                            const truncatedMessage = msg.message.length > 50 ? msg.message.slice(0, 50) + "..." : msg.message;

                            return (
                                <div
                                    key={msg.id}
                                    className="post-it"
                                    style={{ backgroundColor, transform: `rotate(${rotation})` }}
                                    onClick={() => openModal(msg)}
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
