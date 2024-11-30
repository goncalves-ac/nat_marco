import React, { useState, useEffect } from "react";
import NavBar from "./../component/NavBar.js";
import Countdown from "./../component/Countdown.js";
import "./../style/PostItBoard.css";

const PostItBoard = () => {
    const [messages, setMessages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ name: "", message: "" });

    const canRead = JSON.parse(localStorage.getItem("canRead"));

    useEffect(() => {
        // Fetch messages from API
        fetch("https://nataliaemarcos.online/getMessages.php")
            .then((response) => response.json())
            .then((data) => setMessages(data))
            .catch((error) => console.error("Erro ao buscar mensagens:", error));
    }, []);

    useEffect(() => {
        const updateItemsPerPage = () => {
            setItemsPerPage(window.innerWidth < 1051 ? messages.length : 9);
        };
        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);

        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, [messages.length]);

    const handlePageChange = (page) => setCurrentPage(page);

    const openModal = (msg) => {
        setModalContent(msg);
        setModalOpen(true);

        // Mark message as read
        fetch("https://nataliaemarcos.online/getMessages.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: msg.id }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success") {
                    setMessages((prevMessages) =>
                        prevMessages.map((message) =>
                            message.id === msg.id ? { ...message, readed: 1 } : message
                        )
                    );
                }
            })
            .catch((error) => console.error("Erro ao marcar mensagem como lida:", error));
    };

    const closeModal = () => setModalOpen(false);

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
                        {currentMessages.map((msg) => (
                            <div
                                key={msg.id}
                                className="post-it"
                                style={{
                                    backgroundColor: msg.readed ? "#e8431570" : "#ffff8d",
                                    transform: `rotate(${Math.random() * 10 - 5}deg)`,
                                }}
                                onClick={() => openModal(msg)}
                            >
                                <div className="post-it-name">{msg.name}</div>
                                <div className="post-it-message">
                                    {msg.message.length > 50
                                        ? msg.message.slice(0, 50) + "..."
                                        : msg.message}
                                </div>
                            </div>
                        ))}
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
                            <div
                                className="modal-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <span className="close" onClick={closeModal}>
                                    &times;
                                </span>
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
