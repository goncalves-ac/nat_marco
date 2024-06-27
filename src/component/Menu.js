import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './../style/Menu.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importando o CSS da Font Awesome

// IMG
import Couple from './../img/NM.png'

function Menu() {
    const [isSmall, setIsSmall] = useState(false);

    const handleMenuClick = () => {
        setIsSmall(!isSmall);
    };

    return (
        <section>
            <div className="menu-container">
                <div id="navMenu" className="diamond" onClick={handleMenuClick}>
                    <div id="mainRotCorrect" className="rotCorrect">
                        <img src={ Couple } alt="" className="menu-img" />
                    </div>
                </div>
                <div id="nav1" className={`nav nav3 diamond ${isSmall ? 'small' : ''}`}>
                    <div className="rotCorrect">
                        <Link to="/Date">
                            <i className="fa-regular fa-calendar-check fa-2x" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
                <div id="nav2" className={`nav nav1 diamond ${isSmall ? 'small' : ''}`}>
                    <div className="rotCorrect">
                        <Link to="/VenusMars">
                            <i className="fa-solid fa-venus-mars fa-2x" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
                <div id="nav3" className={`nav nav2 diamond ${isSmall ? 'small' : ''}`}>
                    <Link to="/"> 
                        <div className="rotCorrect">
                            <i className="fa-brands fa-fort-awesome fa-2x"></i>
                        </div>
                    </Link>
                </div>
                <div id="nav4" className={`nav nav4 diamond ${isSmall ? 'small' : ''}`}>
                    <div className="rotCorrect">
                        <Link to="/SlideshowPage">
                            <i className="fa-solid fa-camera-retro fa-2x" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
                <div id="nav5" className={`nav nav5 diamond ${isSmall ? 'small' : ''}`}>
                    <div className="rotCorrect">
                        <Link to="/gifts">
                            <i className="fa-solid fa-gifts fa-2x" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;
