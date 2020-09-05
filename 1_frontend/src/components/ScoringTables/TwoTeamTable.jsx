import React, { Component } from 'react';

class TwoTeamTable extends Component {
    constructor(props) {
        super(props)

         this.aScoreInput = React.createRef();
         this.bScoreInput = React.createRef();

         this.state = {
            totalAScore: 0,
            totalBScore: 0,
            roundNumber: 0,
            roundScores: [],
        }
     }

     checkNaN = () => {
        var aValue = this.aScoreInput.current.value;
        var bValue = this.bScoreInput.current.value;

        if(aValue === "" || bValue === ""){
         
         alert("Por favor, insira um placar por time!");
         
        } else {
            var roundValue = this.state.roundNumber;
            aValue = parseInt(aValue, 0);
            bValue = parseInt(bValue, 0);

            this.handleRoundEnd(roundValue, aValue, bValue);  
        }
     }

     handleRoundEnd = (roundValue, aValue, bValue) => {
         this.setState({
            roundNumber: roundValue + 1,
            roundScores: [
               ...this.state.roundScores,
               { round: roundValue + 1, teamA: aValue, teamB: bValue },
            ],
            totalAScore: this.state.totalAScore + aValue,
            totalBScore: this.state.totalBScore + bValue
         });

         this.valueInputForm.reset();
         this.scoreChecker(this.state.totalAScore, this.state.totalBScore)
     }

     tieHandler(){
        return this.props.endGame("tie");
     }

     scoreChecker(scoreA, scoreB){
         var testFunction = () => {this.props.endGame("tie")}

        if(scoreA >= this.props.targetScore && scoreA > scoreB){
           var winningTeam = this.props.teamA;
           this.props.engGame(winningTeam);
        } else if(scoreB >= this.props.targetScore && scoreB > scoreA){
           var winningTeam = this.props.teamB;
           this.props.endGame(winningTeam);
        } else if(scoreA >= this.props.targetScore || scoreB >= this.props.targetScore){
           scoreA === scoreB ? testFunction : null;
        }
     }
  
     renderScoreData() {
        return this.state.roundScores.map(( roundScoring ) => {
           const { round, teamA, teamB } = roundScoring
           return (
              <tr>
                  <td> { round } </td>
                  <td>{ teamA }</td>
                  <td>{ teamB }</td>
              </tr>
           )
        })
     }

     scoreResetProcedure(){
        this.setState({
            totalAScore: 0,
            totalBScore: 0,
            roundNumber: 0,
            roundScores: [],
        })

        return this.props.completeReset
     }

     render() {
        return (
           <div className="game-scoring-area">
               { this.props.scoreResetProcedure ? this.scoreResetProcedure : null}
              <table id='game-scoring-table'>
                 <tbody>
                    <tr>
                        <th rowSpan="2">Round</th>
                        <th> { this.props.teamA }</th>
                        <th> { this.props.teamB }</th>
                    </tr>

                    <tr>
                       <th>{ this.state.totalAScore }</th>
                       <th>{ this.state.totalBScore }</th>
                    </tr>

                    { this.renderScoreData() }

                  </tbody>
               </table>

               <hr />

               <div className="form-controls">
                  <form ref={(form) => this.valueInputForm = form} className="value-inputs">
                     <div className="form-separation">
                        <label for="a-score-input">{ this.props.teamB }</label>
                        <input type="number" id="a-score-input" ref={ this.aScoreInput } className="round-score-input" />
                     </div>

                     <div className="form-separation">
                        <label for="a-score-input">{ this.props.teamB }</label>
                        <input type="number" id="b-score-input" ref={ this.bScoreInput } className="round-score-input" />
                     </div>
                  </form>
                  
                  <button onClick={ this.checkNaN } className="regular-button">Registrar placar</button>
               </div>

           </div>
        )
     }
}

export default TwoTeamTable