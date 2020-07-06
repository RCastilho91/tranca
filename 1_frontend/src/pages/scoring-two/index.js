import React from 'react';
import { Link } from 'react-router-dom';
import '../../global.css'
import './styles.css'
import logo from '../../assets/Tranca transparent.png'
import TwoTeamTable from '../../components/TwoTeamTable';
import ExitModal from '../../components/ExitModal';

export default function ScoringTwo() {

    const exitModalCall = new ExitModal().handleOpen();

    return(
        <div className="container">
            <div className="header">
            <ExitModal />
                <div className="left-header">
                    <Link className="img" onClick={ exitModalCall }><img className="top-left-logo" src={ logo } alt="Tranca!" /></Link>
                </div>
                <div className="right-header">
                    <span className="target-score-title">Target score</span>
                    <span className="target-score-value">3,500</span>
                </div>
            </div>
            
            <TwoTeamTable />
        </div>
    );
}