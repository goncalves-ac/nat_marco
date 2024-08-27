import React, { useState } from "react";
import PostIt from "./../component/PostIt.js";
import NavBar from './../component/NavBar.js';
import Countdown from './../component/Countdown.js';
import "./../style/PagMsg.css";
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
        // Adicione mais mensagens aqui
    ];

    const itemsPerPage = 16; // Grade 4x4
    const [currentPage, setCurrentPage] = useState(1);
    const [readMessages, setReadMessages] = useState([]);

    const generatePositions = () => {
        const positions = [];
        const rows = 4;
        const cols = 4;
        const cellHeight = 20; // 20vh
        const cellWidth = 20; // 20vw

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                positions.push({
                    top: `${row * cellHeight}vh`,
                    left: `${col * cellWidth}vw`,
                });
            }
        }
        return positions;
    };

    const positions = generatePositions();
    const totalPages = Math.ceil(messages.length / itemsPerPage);
    const currentMessages = messages.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleMarkAsRead = (index) => {
        if (!readMessages.includes(index)) {
            setReadMessages([...readMessages, index]);
        }
    };

    return (
        <section>
            <NavBar />
            <Countdown targetDate="2025-01-05T00:00:00" />
            <div className="post-it-board-container">
                <div className="post-it-board">
                    {currentMessages.map((msg, index) => {
                        const position = positions[index % itemsPerPage]; // Posição fixa com base no índice
                        const isRead = readMessages.includes((currentPage - 1) * itemsPerPage + index);
                        return (
                            <PostIt
                                key={(currentPage - 1) * itemsPerPage + index}
                                name={msg.name}
                                message={msg.message}
                                style={{ top: position.top, left: position.left }}
                                isRead={isRead}
                                onMarkAsRead={() => handleMarkAsRead((currentPage - 1) * itemsPerPage + index)}
                            />
                        );
                    })}
                </div>
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
        </section>
    );
};

export default PostItBoard;
