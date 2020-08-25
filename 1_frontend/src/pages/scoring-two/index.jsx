import React from 'react';
import { Link } from 'react-router-dom';
import '../../global.css'
import './styles.css'
import logo from '../../assets/Tranca transparent.png'
import TwoTeamTable from '../../components/ScoringTables/TwoTeamTable';
import ScoringHeader from '../../components/ScoringTables/ScoringHeader';
import ExitModal from '../../components/Modals/ExitModal';

export default class ScoringTwo {
    constructor(props){
        super(props);

        this.state = {
            targetScore: 3500,
            exitModal: false,
        }

        this.toggleExitModal = this.toggleExitModal.bind(this);
    }


    toggleExitModal(){

    }

    handleMaxScore( newScore ){
        this.setState({
            ...this.state,
            targetScore: newScore
        })
    }

    render(){
        return(
            <ScoringHeader { ...this.state.targetScore } />
        )
    }
}