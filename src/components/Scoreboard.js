import React from "react";
import "../styles/FingerCricketGame.css";

const Scoreboard = ({ userScore, aiScore }) => {
  return (
    <div className="scoreboard">
      <p>Your Score: <b>{userScore}</b></p>
      <p>AI Score: <b>{aiScore}</b></p>
    </div>
  );
};

export default Scoreboard;
