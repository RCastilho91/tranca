import React, { Component } from "react";
import ScoringHeader from "../components/ScoringHeader/ScoringHeader";
import TwoTeamTable from "../components/ScoringTables/TwoTeamTable";

// https://www.youtube.com/watch?v=sX3KeP7v7Kg&t=707s&ab_channel=DaveCeddia

export default class ScoringTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamA: "Time A",
      teamB: "Time B",
      scoreLimit: 3500,
      teamAScore: 0,
      teamBScore: 0,
      roundScores: [
        {
          round: 0,
          teamA: 0,
          teamB: 0,
        },
        {
          round: 1,
          teamA: 1500,
          teamB: 1200,
        },
      ],
    };

    this.teamNameSwitch = this.teamNameSwitch.bind(this);
  }

  teamNameSwitch(event) {
    targetTeam = event.current.id;
    newTeamName = event.current.value;

    targetTeam === "teamARef" ? setTeamA(newTeamName) : setTeamB(newTeamB);
  }

  render() {
    return (
      <div className="scoring-two">
        <ScoringHeader scoreLimit={this.props.scoreLimit} teamNameSwitch={this.teamNameSwitch} />
        <TwoTeamTable {...this.props} teamNameSwitch={this.teamNameSwitch} />
      </div>
    );
  }
}
