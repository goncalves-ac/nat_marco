import React, { useState } from 'react';

const RSVPFormPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        conf: false,
        message: '',
        readed: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://nataliaemarcos.online/api.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            if (result.status === 'success') {
                alert('Dados salvos com sucesso!');
            } else {
                alert('Erro ao salvar os dados: ' + result.message);
            }
        } catch (error) {
            alert('Erro ao enviar dados: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nome"
                required
            />
            <input
                type="checkbox"
                name="conf"
                checked={formData.conf}
                onChange={handleChange}
            />
            <label htmlFor="conf">Confirmar</label>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensagem"
                required
            />
            <input
                type="checkbox"
                name="readed"
                checked={formData.readed}
                onChange={handleChange}
            />
            <label htmlFor="readed">Lido</label>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default RSVPFormPage;
