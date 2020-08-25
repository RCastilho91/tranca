import React from 'react';

export default function ScoringHeader( targetScore ){
    return(
        <div className="header">
            <div className="left-header">
                <Link className="img"><img className="top-left-logo" src={ logo } alt="Tranca!" /></Link>
            </div>
            <div className="right-header">
                <span className="target-score-title">Target score</span>
                <span className="target-score-value">{ targetScore }</span>
            </div>
        </div>
    );
}