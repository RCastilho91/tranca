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
            roundScores: []
        }
     }

     checkNaN = () => {
        var aValue = this.aScoreInput.current.value;
        var bValue = this.bScoreInput.current.value;

        if(aValue == "" || bValue == ""){
           var roundValue = this.state.roundNumber;
           aValue = parseInt(aValue, 0);
           bValue = parseInt(bValue, 0);

           this.handleRoundEnd(roundValue, aValue, bValue)
        } else {
           alert("You must assign scores for every team!")
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
  
     render() {
        return (
           <div className="game-scoring-area">

              <table id='game-scoring-table'>
                 <tbody>
                    <tr>
                        <th rowSpan="2">Round</th>
                        <th>Team A</th>
                        <th>Team B</th>
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
                        <label for="a-score-input">Team A</label>
                        <input type="number" id="a-score-input" ref={ this.aScoreInput } className="round-score-input" />
                     </div>

                     <div className="form-separation">
                        <label for="a-score-input">Team B</label>
                        <input type="number" id="b-score-input" ref={ this.bScoreInput } className="round-score-input" />
                     </div>
                  </form>
                  
                  <button onClick={ this.checkNaN } className="regular-button">Log this round</button>
               </div>

           </div>
        )
     }
}

export default TwoTeamTable