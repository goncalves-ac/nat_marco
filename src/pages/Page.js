import React from 'react';
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import './../style/Page.css';

import NatMarco from './../img/NATMARCOS.png';


function Page() {
    const navigate = useNavigate();

    const handleClick = () => { 
        navigate("/VenusMars"); 
    }

    // Define media queries
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

    // Conditional styles based on media queries
    const headerStyle = {
        fontSize: isMobile ? 'calc(8px + 2vmin)' : isTablet ? 'calc(8px + 2vmin)' : 'calc(10px + 2vmin)',
        padding: isMobile ? '10px' : '20px',
        justifyContent: isMobile ? 'center' : 'flex-end'
    };

    const buttonStyle = {
        width: isMobile ? '80vw' : isTablet ? '70vw' : '50vw',
        height: isMobile ? '7vh' : isTablet ? '8vh' : '10vh',
        fontSize: isMobile ? '0.8em' : isTablet ? '0.9em' : '1em',
        margin: isMobile ? '0.8em' : isTablet ? '1em' : '1.5em',
    };

    return (
        <div className="App">
            <header className="App-header" style={headerStyle}>
                <button 
                    type="button" 
                    className="App-button" 
                    style={buttonStyle} 
                    onClick={handleClick}
                >
                    
                </button>
            </header>
        </div>
    );
}

export default Page;
