import React from "react";
import { useSelector } from "react-redux";

import ScoringHeader from "../components/ScoringHeader/ScoringHeader";
import TwoTeamTable from "../components/ScoringTables/TwoTeamTable";

export default function ScoringTwo() {
  const teamScores = useSelector((state) => state.teamScores);

  return (
    <div className="scoring-two">
      <ScoringHeader />
      <TwoTeamTable />
    </div>
  );
}
