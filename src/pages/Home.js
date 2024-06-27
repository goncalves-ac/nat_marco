import React from 'react';
import { useNavigate } from "react-router-dom";
import './../style/Home.css';

function Home () {

    const navigate = useNavigate();
    const handleClick = () => { 
        navigate("/page"); 
    }
    return (
        <div className="App">
            <header className="App-header">
                <button type="button" className="App-button" onClick={ handleClick } >Natália & Marcos</button>
            </header>
        </div>
    );
}

export default Home;

