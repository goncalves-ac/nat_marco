import React, { useState, useEffect } from "react";
import NavBar from './../component/NavBar.js';
import Countdown from './../component/Countdown.js';
import "./../style/PostItBoard.css";

const PostItBoard = () => {
    /*const messages = [
        { name: "Alice1", message: "Parabéns pelo casamento! Parabéns pelo casamento! Parabéns pelo casamento! Parabéns pelo casamento!" },
        { name: "Alice2", message: "Parabéns pelo casamento!" },
        { name: "Alice3", message: "Parabéns pelo casamento!" },
        { name: "Alice4", message: "Parabéns pelo casamento!" },
        { name: "Alice5", message: "Parabéns pelo casamento!" },
        { name: "Alice6", message: "Parabéns pelo casamen
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
    ];*/

    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);
    const [readMessages, setReadMessages] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ name: '', message: '' });

    // Função para verificar se o usuário pode ler
    const checkUserAccess = async () => {
        try {
            const response = await fetch('https://nataliaemarcos.online/api.php', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Adicione o token ou outras informações necessárias no cabeçalho se precisar
                },
            });
            const data = await response.json();
            if (data.canRead) {
                setCanRead(true);
            }
        } catch (error) {
            console.error("Erro ao verificar acesso do usuário:", error);
        } finally {
            setLoading(false); // Define loading como false após a verificação
        }
    };

    useEffect(() => {
        checkUserAccess(); // Chama a função ao montar o componente

        // Ajustar itemsPerPage com base na largura da tela
        const updateItemsPerPage = () => {
            if (window.innerWidth < 1051) {
                setItemsPerPage(messages.length); // Exibe todas as mensagens em uma página
            } else {
                setItemsPerPage(9); // Valor padrão para telas maiores
            }
        };

        updateItemsPerPage(); // Chama a função uma vez na montagem
        window.addEventListener("resize", updateItemsPerPage); // Atualiza ao redimensionar a tela

        // Cleanup
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, [messages.length]);

    if (loading) {
        return <div>Carregando...</div>; // Exibe uma mensagem de carregamento enquanto verifica o acesso
    }

    if (!canRead) {
        return <div>Acesso negado. Você não tem permissão para ver esta página.</div>; // Mensagem de acesso negado
    }

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
    const getRandomColor = () => {
        const getRandomValue = () => Math.floor(Math.random() * 256);
        
        // Garante que a cor não seja preta (0, 0, 0) ou branca (255, 255, 255)
        let r, g, b;
        do {
            r = getRandomValue();
            g = getRandomValue();
            b = getRandomValue();
        } while ((r === 0 && g === 0 && b === 0) || (r === 255 && g === 255 && b === 255));
        
        return `rgb(${r}, ${g}, ${b})`;
    };
    
    // Exemplo de uso
    console.log(getRandomColor());
    

    return (
        <section>
            <NavBar />
            <Countdown targetDate="2025-01-05T00:00:00" />
            <div className="post-it-board-container">
                <div className="post-it-board">
                    {currentMessages.map((msg, index) => {
                        const isRead = readMessages.includes(index);
                        const backgroundColor = getRandomColor();
                        const rotation = getRandomRotation();
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
                                <div className="post-it-name">
                                    {msg.name}
                                </div>
                                <div className="post-it-message">
                                    {truncatedMessage}
                                </div>
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
        </section>
    );
};

export default PostItBoard;
