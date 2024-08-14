import React from 'react';
import { useNavigate } from "react-router-dom";
import './../style/Page.css';

function Page() {

    const navigate = useNavigate();
    const handleClick = () => { 
        navigate("/VenusMars"); 
    }

    return (
        <div className="App">
            <header className="App-header">
                <button type="button" className="App-button" onClick={ handleClick } >Natália & Marcos</button>
            </header>
        </div>
    );
}

export default Page;
