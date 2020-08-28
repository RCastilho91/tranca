import React from 'react';
import '../styles.css';

function TwoTeamNameChange(props){
    return(
        <div className="name-change-modal">

            <div className="modal-controls">
                <button className="regular-button">Aplicar</button>
                <button className="negative-button">Cancelar</button>
            </div>
        </div>
    )
}

function ThreeTeamNameChange(props){

}

function MaxScoreChange(props){

}

export {
    TwoTeamNameChange,
    ThreeTeamNameChange,
    MaxScoreChange
}