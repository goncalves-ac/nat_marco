import React, { useState } from "react";
import NavBar from "./../component/NavBar.js";
import Countdown from "./../component/Countdown.js";
import RSVPForm from "./../component/RSVPForm.js";
import FeedbackMessage from "./../component/FeedbackMessage.js"; 

function RSVPFormPage() {
  const [rsvps, setRSVPs] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [formData, setFormData] = useState({ name: '', conf: false, message: '' });
  const [feedbackVisible, setFeedbackVisible] = useState(false); // Estado para controle de visibilidade do feedback
  const apiUrl = "https://nataliaemarcos.online/api.php"; 

  const addRSVP = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          conf: formData.conf,
          message: formData.message,
          readed: false,
        }),
      });

      const data = await response.json();
      if (data.status === "success") {
        setRSVPs((prevRSVPs) => [...prevRSVPs, formData]);
        setFeedback({ type: "success", message: "Presença confirmada com sucesso!" });
        clearFields(); // Limpa os campos apenas em caso de sucesso
      } else {
        setFeedback({ type: "error", message: data.message || "Erro ao salvar RSVP." });
      }
      setFeedbackVisible(true); // Mostra a mensagem de feedback após cada submissão
    } catch (error) {
      setFeedback({ type: "error", message: "Erro na requisição. Tente novamente." });
      setFeedbackVisible(true); // Mostra a mensagem de feedback mesmo em erro
    }
  };

  const clearFields = () => {
    setFormData({ name: '', conf: false, message: '' });
  };

  const handleFeedbackClick = () => {
    setFeedbackVisible(false); // Oculta a mensagem ao clicar
  };

  return (
    <section>
      <NavBar />
      <Countdown targetDate="2025-01-05T00:00:00" />
      <div className="RSVP">
        <RSVPForm 
          formData={formData} 
          setFormData={setFormData} 
          setRSVPs={addRSVP} 
        />
        {feedbackVisible && feedback && (
          <FeedbackMessage 
            type={feedback.type} 
            message={feedback.message} 
            onClick={handleFeedbackClick} // Passa a função de ocultar
          />
        )}
      </div>
    </section>
  );
}

export default RSVPFormPage;
