import React from 'react';
import { Link } from 'react-router-dom';
import '../../global.css'
import './styles.css'
import logo from '../../assets/Tranca transparent.png'
import ThreeTeamTable from '../../components/ThreeTeamTable';
import TestModal from '../../components/test-modal/TestModal';

export default function ScoringThree() {
    return(
        <div className="container">
            <TestModal />
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