import React from "react";
import data from "./data.json";
import "./LeaderBoard.css";

const LeaderBoard = () => {
  console.log(data);

  return (
      <div className="Band">
        <div className="Card" id="PlanCard">
          <div className="PlanOverviewTitle">Leaderboard:</div>

          <div className="PlanDesc">
            <span id="PlanName">Users</span>
            <span id="TimeLeft">Score</span>
          </div>

          <div className="PlanDisplay">
    <p className="TripName">Jay Eng</p>
      <div className="Countdown">
        100 points
        &nbsp;&nbsp;&nbsp;
        <div className="EditBtn">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-award" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"></path>
          <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"></path>
          <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"></path>
        </svg>
        </div>
      </div>
    </div>

            <div className="AddPlan" id="AddPlan">
              + Invite a friend
            </div>
        </div>
      </div>
  );
};

export default LeaderBoard;
