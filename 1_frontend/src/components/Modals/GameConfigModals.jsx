import React, { Component } from 'react';
import '../styles.css';

class TwoTeamNameChange extends Component {
    constructor(props){
        super(props);

        this.teamAName = React.createRef();
        this.teamBName = React.createRef();
    }

    render(){
        return(
            <div className="name-change-modal">
                <div className="change-name-modal-content">
                    <span className="modal-team-name">{ props.teamA }</span>
                    <input type="text" placeholder={ props.teamA } ref={ this.teamAName } />
    
                    <span className="modal-team-name">{ props.teamB }</span>
                    <input type="text" placeholder={ props.teamB } ref={ this.teamBName } />
                </div>

                <div className="modal-controls">
                    <button className="regular-button" 
                        onClick={ props.handleTeamNameChange(this.teamAName, this.teamBName) }>
                        Aplicar
                    </button>
                    
                    <button className="negative-button">Cancelar</button>
                </div>
            </div>
        )
    }
}

function ThreeTeamNameChange(props){

}

function MaxScoreChange(props){

}

export {
    TwoTeamNameChange,
    ThreeTeamNameChange,
    MaxScoreChange
}