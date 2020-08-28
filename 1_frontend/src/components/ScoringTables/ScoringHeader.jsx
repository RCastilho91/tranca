import React from 'react';
import logo from '../../assets/Tranca transparent.png'

export default function ScoringHeader( props ){
    return(
        <div className="header">
            <div className="left-header">
                <img className="top-left-logo" onClick={ props.handleModal } src={ logo } alt="Tranca!" />
            </div>
            <div className="right-header">
                <span className="target-score-title">Target score</span>
                <span className="target-score-value">{ props.targetScore }</span>
            </div>
        </div>
    );
}