import React from 'react';

export default function ScoringHeader(props){
    return(
        <div className="scoring-header">
            <div className="header-logo">
                LOGO
            </div>
            <div className="score-limit">
                <span className="score-target-title">Limite</span>
                {props.targetScore}
            </div>
        </div>
    )
}