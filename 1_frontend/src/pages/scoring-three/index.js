import React from 'react';
import { Link } from 'react-router-dom';
import '../../global.css'
import './styles.css'
import logo from '../../assets/Tranca transparent.png'
import ThreeTeamTable from '../../components/ThreeTeamTable';

export default function ScoringTwo() {

    return(
        <div className="container">
            <div className="header">
                <div className="left-header">
                    <Link className="img" to="/"><img className="top-left-logo" src={ logo } alt="Tranca!" /></Link>
                </div>
                <div className="right-header">
                    <span className="target-score-title">Target score</span>
                    <span className="target-score-value">5,000</span>
                </div>
            </div>
            
            <ThreeTeamTable />
        </div>
    );
}