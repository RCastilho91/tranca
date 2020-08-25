import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

export default function ExitModal( props ){
    
    const closeModal = props.toggleExitModal;
    
    return(
        <div className="modal-container">
            <div className="modal-content">
                <div className="modal-controls">
                    <button className="regular-button" onClick={ closeModal }>Permanecer</button>
                    <Link className="negative-button" to="/">Sair</Link>
                </div>
            </div>
        </div>
    )
}