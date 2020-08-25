import React from 'react';
import logo from '../../assets/Tranca transparent.png'

export default function ScoringHeader( parentState, parentFunction ){

    const openModal = parentFunction.toggleExitModal;
    console.log(openModal);
    
    return(
        <div className="header">
            <div className="left-header">
                <img className="top-left-logo" onClick={ openModal } src={ logo } alt="Tranca!" />
                <button className="regular-button" onClick={ openModal }>Click me</button>
            </div>
            <div className="right-header">
                <span className="target-score-title">Target score</span>
                <span className="target-score-value">{ parentState.targetScore }</span>
            </div>
        </div>
    );
}