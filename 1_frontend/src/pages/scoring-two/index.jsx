import React, { Component } from 'react';
import '../../global.css'
import './styles.css'
import TwoTeamTable from '../../components/ScoringTables/TwoTeamTable';
import ScoringHeader from '../../components/ScoringTables/ScoringHeader';
import ExitModal from '../../components/Modals/ExitModal';

export default class ScoringTwo extends Component {
    constructor(props){
        super(props);

        this.state = {
            targetScore: 3500,
            exitModal: false,
        }

        this.toggleExitModal = this.toggleExitModal.bind(this);
        this.handleMaxScore = this.handleMaxScore.bind(this);
    }

    toggleExitModal(){
        console.log("Click detected");

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
                { this.state.exitModal ? <ExitModal toggleExitModal={ this.toggleExitModal.bind(this) } /> : null }
                <ScoringHeader { ...this.state } toggleExitModal={ this.toggleExitModal.bind(this) } />
                <TwoTeamTable />
            </div>
        )
    }
}