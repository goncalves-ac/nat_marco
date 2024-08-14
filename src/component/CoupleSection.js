import React from 'react';
import './../style/CoupleSection.css'; // Importe o arquivo CSS correspondente

// IMG
import NATALIA from './../img/08N.png';
import MARCOS from './../img/26M.png';

const CoupleSection = () => {
    return (
        <section className='container'>
            <div className="couple-container">
                <h1>“Aonde quer que tu fores, irei eu, e onde quer que pousares á noite, ali pousarei eu. O teu povo será o meu povo, o teu Deus o meu Deus….”</h1>
                <h3>- Rute 1:16</h3>
                <p>Convidamos você e seus familiares para comparecer ao nosso casamento:</p>
            </div>
            <div className="couple-wrap animate-box">
                <div className="couple-half">
                    <div className="groom">
                        <img src={NATALIA} alt="groom" className="img-responsive" />
                    </div>
                    <div className="desc-groom">
                        <h3>Natália Pereira de Souza</h3>
                        <p><span>Filha de</span><br />
                            <span className="parents-font">Maria Helena Pereira Popadiuk</span>
                            <br />
                            <span className="parents-font">José Sérgio Souza</span>
                        </p>
                    </div>
                </div>
                <p className="heart text-center"><i className="fa-solid fa-heart"></i></p>
                <div className="couple-half">
                    <div className="bride">
                        <img src={MARCOS} alt="groom" className="img-responsive" />
                    </div>
                    <div className="desc-bride">
                        <h3>Marcos</h3>
                        <p><span>Filho de</span><br />
                            <span className="parents-font">Ana Isabel Tatagiba Paulo Carvalho</span>
                            <br />
                            <span className="parents-font">Marcos de Oliveira Carvalho</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default CoupleSection;
