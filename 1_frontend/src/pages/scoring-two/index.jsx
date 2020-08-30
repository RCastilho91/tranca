import React, { Component } from 'react';
import '../../global.css';
import './styles.css';
import TwoTeamTable from '../../components/ScoringTables/TwoTeamTable';
import ScoringHeader from '../../components/ScoringTables/ScoringHeader';
import ExitModal from '../../components/Modals/ExitModal';
import GameEndModal from '../../components/Modals/GameEndModal';

export default class ScoringTwo extends Component {
    constructor(props){
        super(props);

        this.state = {
            targetScore: 3500,
            exitModal: false,
            nameChangeModal: false,
            scoreChangeModal: false,
            teamA: 'Time A',
            teamB: 'Time B',
            winningTeam: null,
            scoreResetProcedure: false,
        }

        this.toggleExitModal = this.toggleExitModal.bind(this);
        this.handleMaxScore = this.handleMaxScore.bind(this);
    }

    toggleExitModal(){
        this.setState({
            ...this.state,
            exitModal: !this.state.exitModal
        })
    }

    handleMaxScore( newScore ){
        this.setState({
            ...this.state,
            targetScore: newScore
        })
    }

    handleTeamNameChange(teamA, teamB){
        this.setState({
            ...this.state,
            teamA: { teamA },
            teamB: { teamB }
        })
    }

    initiateGameReset(){
        this.setState({
            winningTeam: null,
            scoreResetProcedure: true
        })
    }

    endGameReset(){
        this.setState({
            scoreResetProcedure: false
        })
    }

    handleGameOver(winningTeam){
        this.setState({
            ...this.state,
            winningTeam: { winningTeam }
        })
    }

    handleScoreChange(score){
        this.setState({
            ...this.state,
            targetScore: { score },
        })
    }

    render(){
        return(
            <div className="scoring-page">
                { this.state.winningTeam != null ? <GameEndModal { ...this.state } restartGame={ this.handleGameReset } /> : null }
                { this.state.exitModal ? <ExitModal handleModal={ this.toggleExitModal } /> : null }
                <ScoringHeader { ...this.state } handleModal={ this.toggleExitModal } />
                <TwoTeamTable {...this.state } completeReset={ this.endGameReset } />
            </div>
        )
    }
}