import React, { Component } from 'react';
import '../../global.css';
import './styles.css';
import TwoTeamTable from '../../components/ScoringTables/TwoTeamTable';
import ScoringHeader from '../../components/ScoringTables/ScoringHeader';
import ExitModal from '../../components/Modals/ExitModal';

export default class ScoringTwo extends Component {
    constructor(props){
        super(props);

        this.state = {
            targetScore: 3500,
            exitModal: false,
            teamA: 'Time A',
            teamB: 'Time B'
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

    render(){
        return(
            <div className="scoring-page">
                { this.state.exitModal ? <ExitModal handleModal={ this.toggleExitModal } /> : null }
                <ScoringHeader { ...this.state } handleModal={ this.toggleExitModal } />
                <TwoTeamTable {...this.state } />
            </div>
        )
    }
}